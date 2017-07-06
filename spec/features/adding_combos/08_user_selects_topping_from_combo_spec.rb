require 'rails_helper'

feature 'user selects own combos' do
  let!(:user) { FactoryGirl.create(:user) }
  let!(:genre) { FactoryGirl.create(:genre) }
  let!(:romance) { FactoryGirl.create(:genre, name: 'Romance') }
  let!(:topping) { FactoryGirl.create(:topping) }
  let!(:chicken) { FactoryGirl.create(:topping, name: 'Grilled Chicken') }
  let!(:suggestion2) { FactoryGirl.create(
    :suggestion, user: nil, genre: romance, topping: topping) }
  let!(:suggestion3) { FactoryGirl.create(
    :suggestion, user: nil, topping: chicken, genre: genre) }

  scenario 'user selects topping from newly created combo' do
    visit 'toppings/,Ham'

    expect(Movie.first.genre.name).to eq('Romance')

    sign_in_as(user)
    visit 'suggestions/Comedy,Ham,none'
    visit 'toppings/,Ham'

    expect(Movie.last.genre.name).to eq('Comedy')
  end

  scenario 'user selects topping from newly created combo' do
    visit 'movies/genre,Comedy'

    expect(page).to have_content('Grilled Chicken')

    sign_in_as(user)
    visit 'suggestions/Comedy,Ham,none'
    visit 'movies/genre,Comedy'

    expect(page).to have_content('Ham')
  end
end
