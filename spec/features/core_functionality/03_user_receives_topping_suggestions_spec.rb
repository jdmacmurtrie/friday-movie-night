require 'rails_helper'

feature 'user receives suggestions for movies' do
  let!(:cheese) { FactoryGirl.create(:topping, name: "Extra Cheese") }
  let!(:family) { FactoryGirl.create(:genre, name: 'Family') }
  let!(:adventure) { FactoryGirl.create(:genre, name: 'Adventure') }
  let!(:animation) { FactoryGirl.create(:genre, name: 'Animation') }
  let!(:suggestion) { FactoryGirl.create(:suggestion) }
  let!(:minion1) { FactoryGirl.create(
    :suggestion, genre: family, topping: cheese) }
  let!(:minion2) { FactoryGirl.create(
    :suggestion, genre: adventure, topping: cheese) }
  let!(:minion3) { FactoryGirl.create(
    :suggestion, genre: animation, topping: cheese) }

  scenario 'user inputs a genre' do
    visit 'movies/genre,Comedy'

    expect(page.find(:css, ".topping-name", count: 1))
  end

  scenario 'user inputs a movie title' do
    visit 'movies/title,Minions'

    expect(page.find(:css, ".topping-name", count: 1))
  end

  scenario 'user choice of title is not a title' do
    visit 'movies/title,a9(ghaa'

    expect(page).to have_content("I didn't recognize that movie.")
  end
end
