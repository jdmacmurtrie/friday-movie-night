require 'rails_helper'

feature 'user receives suggestions for movies' do
  let!(:suggestion) { FactoryGirl.create(:suggestion) }
  let!(:pineapple) { FactoryGirl.create(:topping, name: 'Pineapple') }
  let!(:pepperoni) { FactoryGirl.create(:topping, name: 'Pepperoni') }
  let!(:music) { FactoryGirl.create(:genre, name: 'Music') }
  let!(:comedy) { FactoryGirl.create(:genre, name: 'Comedy') }
  let!(:suggestion2) { FactoryGirl.create(
  :suggestion, genre: music, topping: pineapple
  ) }
  let!(:suggestion3) { FactoryGirl.create(
  :suggestion, genre: music, topping: pepperoni
  ) }
  let!(:suggestion4) { FactoryGirl.create(
  :suggestion, genre: comedy, topping: pineapple
  ) }

  scenario 'user picks one topping' do
    visit 'toppings/,Pineapple'

    expect(page).to have_selector('li', count: 5)
  end

  scenario 'user picks two toppings with no intersection' do
    visit 'toppings/Pineapple,Ham'

    expect(page).to have_selector('li', count: 5)
  end

  scenario 'user picks two toppings that intersect' do
    visit 'toppings/Pineapple,Pepperoni'

    expect(page).to have_selector('li', count: 5)
  end
end
