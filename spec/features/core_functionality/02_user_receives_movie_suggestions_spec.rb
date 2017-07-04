require 'rails_helper'

feature 'user receives suggestions for movies' do
  let!(:user) { FactoryGirl.create(:user) }
  let!(:suggestion) { FactoryGirl.create(:suggestion, user: user) }
  let!(:pineapple) { FactoryGirl.create(:topping, name: 'Pineapple') }
  let!(:pepperoni) { FactoryGirl.create(:topping, name: 'Pepperoni') }
  let!(:music) { FactoryGirl.create(:genre, name: 'Music') }
  let!(:comedy) { FactoryGirl.create(:genre, name: 'Comedy') }
  let!(:suggestion2) { FactoryGirl.create(
    :suggestion, genre: music, topping: pineapple, user: user) }
  let!(:suggestion3) { FactoryGirl.create(
    :suggestion, genre: music, topping: pepperoni, user: user) }
  let!(:suggestion4) { FactoryGirl.create(
    :suggestion, genre: comedy, topping: pineapple, user: user) }

  scenario 'user picks one topping' do
    visit 'toppings/,Pineapple'

    expect(page).to have_selector('img', count: 4)
  end

  scenario 'user picks two toppings with no intersection' do
    visit 'toppings/Pineapple,Ham'

    expect(page).to have_selector('img', count: 4)
  end

  scenario 'user picks two toppings that intersect' do
    visit 'toppings/Pineapple,Pepperoni'

    expect(page).to have_selector('img', count: 4)
  end
end
