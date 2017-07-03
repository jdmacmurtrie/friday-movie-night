# require 'rails_helper'
#
# feature 'user adds combo' do
#   let!(:user) { FactoryGirl.create(:user, email: 'dfsjlfsdjlfds@gmail.com') }
#   scenario 'user adds new combo with one topping' do
#     sign_in_as(user)
#     click_link 'Make my own combo'
#     select('Action', :from => 'genres')
#     select('Pepperoni', :from => 'toppings')
#     click_button 'Create This Combo'
#
#     expect(Suggestion.all.length).to eq(1)
#   end
# end
#
# # user is not signed in
# # user does not select one field
# # user selects 2 toppings
# # user adds new combo for existing genre
