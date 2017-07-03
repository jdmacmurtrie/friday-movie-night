require 'rails_helper'

feature 'user creates account' do
  let!(:user) { FactoryGirl.create(:user) }

  scenario 'correct information is given' do
    visit root_path
    click_link 'Create Account'
    fill_in 'First Name', with: user.first_name
    fill_in 'Last Name', with: user.last_name
    fill_in 'Email', with: "differen@email.see"
    fill_in 'Password', with: user.password
    fill_in 'Confirm Password', with: user.password
    click_button 'Create Account'

    expect(page).to have_content('Account created.  Go get some pizza!')
    expect(page).to have_content('Sign Out')
  end

  scenario 'required information is not supplied' do
    visit root_path
    click_link 'Create Account'
    click_button 'Create Account'
    expect(page).to have_content("can't be blank")
    expect(page).to_not have_content('Sign Out')
  end

  scenario 'Password confirmation does not match password' do
    visit root_path
    click_link 'Create Account'
    fill_in 'Password', with: user.password
    fill_in 'Confirm Password', with: 'dath'
    click_button 'Create Account'
    expect(page).to have_content("doesn't match")
    expect(page).to_not have_content('Sign Out')
  end
end
