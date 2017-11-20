require 'rails_helper'

feature 'user interacts with user page' do
  let!(:user) { FactoryBot.create(:user) }
  let!(:war) { FactoryBot.create(:genre, name: 'War') }
  let!(:pepperoni) { FactoryBot.create(:topping, name: 'Pepperoni') }
  let!(:suggestion1) { FactoryBot.create(
    :suggestion, user: user) }
  let!(:suggestion2) { FactoryBot.create(
    :suggestion, user: user, genre: war, topping: pepperoni
  ) }

  scenario 'user visits user page' do
    sign_in_as(user)
    click_link 'My Stuff'

    expect(page).to have_content(user.first_name)
    expect(page).to have_content(user.email)
    expect(page).to have_link('Edit My Stuff')
    expect(page).to have_content('Cancel My Stuff')
    expect(page).to have_content('Your Combos:')
    expect(page).to have_content(suggestion1.genre.name)
    expect(page).to have_content(suggestion1.topping.name)
    expect(page).to have_content(suggestion2.genre.name)
    expect(page).to have_content(suggestion2.topping.name)
    expect(page).to have_link(
      "Delete This Combo", count: user.suggestions.length
    )
  end

  scenario 'unauthorized user does not see link to profile' do
    visit root_path

    expect(page).to_not have_link('My Stuff')
  end

  scenario 'user deletes a combo' do
    sign_in_as(user)
    click_link 'My Stuff'
    click_link('Delete This Combo', match: :first)

    expect(page).to_not have_content(suggestion1.genre.name)
    expect(page).to_not have_content(suggestion1.topping.name)
    expect(page).to have_link("Delete This Combo", count: 1)
    expect(page.current_path).to eq(user_path(user))
  end

  scenario 'user edits account' do
    sign_in_as(user)
    click_link 'My Stuff'
    click_link 'Edit My Stuff'
    fill_in 'First Name', with: 'Borb'
    fill_in 'Password', with: user.password
    fill_in 'Confirm Password', with: user.password
    click_button 'Update!'

    expect(page.current_path).to eq(user_path(user))
    expect(page).to have_content('Borb')
    expect(page).to_not have_content('Bob')
    expect(page).to have_content('Stuff Updated Successfully')
  end

  scenario 'user unsuccessfully edits account' do
    sign_in_as(user)
    click_link 'My Stuff'
    click_link 'Edit My Stuff'
    click_button 'Update!'

    expect(page.current_path).to_not eq(user_path(user))
    expect(page.current_path).to eq('/users')
    expect(page).to have_content('can\'t be blank')
  end

  scenario 'user deletes account' do
    sign_in_as(user)
    click_link 'My Stuff'
    click_on 'Cancel My Stuff'

    expect(page.current_path).to eq(root_path)
    expect(page.current_path).to_not eq(user_path(user))
    expect(User.all).to be_empty
    expect(page).to have_content("Bye! We'll miss you!")
  end
end
