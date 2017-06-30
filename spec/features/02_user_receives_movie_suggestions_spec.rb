require 'rails_helper'

feature 'user receives suggestions for movies' do
  let!(:suggestion) { FactoryGirl.create(:suggestion) }
  let!(:pineapple) { FactoryGirl.create(:topping, name: 'Pineapple') }
  let!(:pepperoni) { FactoryGirl.create(:topping, name: 'Pepperoni') }
  let!(:music) { FactoryGirl.create(:genre, name: 'Music') }
  let!(:suggstion2) { FactoryGirl.create(:suggestion, genre: music, topping: pineapple) }
  let!(:suggstion3) { FactoryGirl.create(:suggestion, genre: music, topping: pepperoni) }

  scenario 'user picks one topping' do
    visit 'toppings/,Ham'

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
