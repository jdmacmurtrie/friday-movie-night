require "rails_helper"

RSpec.describe Api::V1::MoviesController, type: :controller do
  let!(:mushroom) { FactoryBot.create(:topping, :mushroom) }
  let!(:sausage) { FactoryBot.create(:topping, :sausage) }
  let!(:bacon) { FactoryBot.create(:topping, :bacon) }
  let!(:romance) { FactoryBot.create(:genre, :romance) }
  let!(:drama) { FactoryBot.create(:genre, :drama) }
  let!(:romance_combo) { FactoryBot.create(:combo, genre: romance, topping: mushroom, user: nil) }
  let!(:romance_combo_with_user) { FactoryBot.create(:combo, genre: romance, topping: bacon) }
  let!(:drama_combo) { FactoryBot.create(:combo, genre: drama, topping: sausage, user: nil) }
  let!(:drama_combo_with_user) { FactoryBot.create(:combo, genre: drama, topping: bacon) }
  let!(:user_without_combos) { FactoryBot.create(:user) }
  let!(:user_with_combos) { drama_combo_with_user.user }

  it "returns toppings and title according to a movie title" do
    movie_query = "title,The Notebook"

    get :index, params: { "params" => movie_query }
    parsed_body = JSON.parse(response.body)

    expect(response.status).to eq 200
    expect(response.content_type).to eq("application/json")
    expect(parsed_body["toppings"].first["name"]).to eq("Sausage") | eq("Mushroom")
    expect(parsed_body["title"]).to eq("The Notebook")
  end

  it "returns toppings according to a movie genre" do
    movie_query = "genre,Romance"

    get :index, params: { "params" => movie_query }
    parsed_body = JSON.parse(response.body)

    expect(response.status).to eq 200
    expect(parsed_body["toppings"].first["name"]).to eq("Mushroom")
    expect(parsed_body["title"]).to eq(nil)
  end

  it "returns a movie if a signed in user has combos" do
    allow(controller).to receive_messages(current_user: user_with_combos)

    movie_query = "title,The Notebook"

    get :index, params: { "params" => movie_query }
    parsed_body = JSON.parse(response.body)

    expect(response.status).to eq 200
    expect(parsed_body["toppings"].first["name"]).to eq("Mushroom") | eq("Sausage") | eq("Bacon")
  end

  it "still returns if a movie a signed in user doesn't have combos" do
    allow(controller).to receive_messages(current_user: user_without_combos)

    movie_query = "title,The Notebook"

    get :index, params: { "params" => movie_query }
    parsed_body = JSON.parse(response.body)

    expect(response.status).to eq 200
    expect(parsed_body["toppings"].first["name"]).to eq("Mushroom") | eq("Sausage") | eq("Bacon")
  end

  it "returns an error if no movie is found to match search parameters" do
    movie_query = "title,7chewquc3i"

    get :index, params: { "params" => movie_query }
    parsed_body = JSON.parse(response.body)

    expect(response.status).to eq 422
    expect(parsed_body["error"]).to eq("Not a real movie!")
  end
end
