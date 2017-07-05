require 'rails_helper'

feature 'user selects own combos' do
  let!(:user) { FactoryGirl.create(:user) }
  let!(:genre) { FactoryGirl.create(:genre) }
  let!(:topping) { FactoryGirl.create(:topping) }

  scenario 'user selects topping from newly created combo' do
    sign_in_as(user)
    visit 'suggestions/Comedy,Ham,none'
    visit 'toppings/,Ham'

    expect(genre.movies.length).to eq(4)
  end

  scenario 'user selects topping from newly created combo' do
    sign_in_as(user)
    visit 'suggestions/Comedy,Ham,none'
    visit 'movies/genre,Comedy'

    expect(page).to have_content('Ham')
  end
end
