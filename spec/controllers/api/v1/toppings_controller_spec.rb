require "rails_helper"

RSpec.describe Api::V1::ToppingsController, type: :controller do
  describe "GET#index" do
    let!(:mushroom) { FactoryBot.create(:topping, :mushroom) }
    let!(:grilled_chicken) { FactoryBot.create(:topping, :grilled_chicken) }
    let!(:bacon) { FactoryBot.create(:topping, :bacon) }
    let!(:sausage) { FactoryBot.create(:topping, :sausage) }
    let!(:romance) { FactoryBot.create(:genre, :romance) }
    let!(:action) { FactoryBot.create(:genre, :action) }
    let!(:comedy_combo) { FactoryBot.create(:combo) }
    let!(:romance_combo) { FactoryBot.create(:combo, genre: romance, topping: mushroom) }
    let!(:action_combo) { FactoryBot.create(:combo, genre: action, topping: comedy_combo.topping) }

    it "returns movies according to a single topping and a genre suggestion" do
      topping_query = "Ham"

      get :index, params: { "params" => topping_query }
      parsed_body = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(Movie.all.count).to eq 12
      expect(parsed_body["movies"].count).to eq(12)
      expect(parsed_body["genre"]["name"]).to eq("Comedy") | eq("Action")
    end

    it "returns movies according to more than one topping" do
      topping_query = "Ham,Mushroom,Sausage"

      get :index, params: { "params" => topping_query }
      parsed_body = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(parsed_body["movies"].count).to eq(12)
    end

    it "returns a movie a user has combos" do
      sign_in(action_combo.user)

      topping_query = "Ham"

      get :index, params: { "params" => topping_query }
      parsed_body = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(parsed_body["genre"]["name"]).to eq("Comedy") | eq("Action")
    end
  end
end
