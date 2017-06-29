require 'rails_helper'

feature 'User chooses which method' do
  scenario 'user chooses to create pizza' do
    visit root_path
    click_button 'I need a pizza!'

    expect(page.current_path).to eq(new_topping_path)
  end

  scenario 'user chooses to create movie' do
    visit root_path
    click_button 'I need a movie!'

    expect(page.current_path).to eq(new_movie_path)
  end
end
