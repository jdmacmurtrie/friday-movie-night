require 'rails_helper'

feature 'user signs out' do
  let!(:user) { FactoryGirl.create(:user, email: 'dfsjlfsdjlfds@gmail.com') }

  scenario 'user successfully signs out' do
    visit root_path
    sign_in_as(user)
    click_link 'Sign Out'

    expect(page).to have_content('Signed out. Peace!')
    expect(page).to have_content('Sign In')
    expect(page).to have_content('Create Account')
  end

  scenario 'user cannot sign out until they sign in' do
    visit root_path

    expect(page).to_not have_content('Sign Out')
  end
end
