require 'rails_helper'

feature 'user adds suggestion' do
  let!(:user) { FactoryGirl.create(:user) }
  let!(:topping) { FactoryGirl.create(:topping) }
  let!(:sausage) { FactoryGirl.create(:topping, name: 'Sausage') }
  let!(:genre) { FactoryGirl.create(:genre) }
  scenario 'user adds new suggestion with one topping' do
    sign_in_as(user)

    expect(page).to have_link("Make my own combo")
  end

  scenario 'unauthorized user cannot see link' do
    visit root_path
    expect(page).to_not have_link("Make my own combo")
  end

  scenario 'user creates combo with one topping' do
    sign_in_as(user)
    visit 'suggestions/Comedy,Ham,none'

    expect(user.suggestions.length).to eq(1)
  end

  scenario 'user creates combo with two toppings' do
    sign_in_as(user)
    visit 'suggestions/Comedy,Ham,Sausage'

    expect(user.suggestions.length).to eq(2)
  end
end

# user does not select one field
# user selects 2 toppings
# user adds new combo for existing genre
