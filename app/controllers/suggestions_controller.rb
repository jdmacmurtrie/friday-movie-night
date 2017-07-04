class SuggestionsController < ApplicationController
  before_action :authenticate_user!

  def new; end

  def show
    combo = params[:id].split(',')
    Suggestion.create(
    genre: Genre.find_by(name: combo.first),
    topping: Topping.find_by(name: combo[1]),
    user: current_user)
    if combo.last != 'none'
      Suggestion.create(
      genre: Genre.find_by(name: combo.first),
      topping: Topping.find_by(name: combo.last),
      user: current_user)
    end
    redirect_to root_path
  end
end
