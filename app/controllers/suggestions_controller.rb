class SuggestionsController < ApplicationController
  before_action :authenticate_user!

  def new
    @suggestion = Suggestion.new
    @user = current_user
  end

  def create
    binding.pry
    @suggestion_1 = Suggestion.new(genre: params[:genre], topping: topping_1, user: current_user)

    if params[:topping_2]
      @suggestion_2 = Suggestion.new(genre: params[:genre], topping: topping_2, user: current_user)
    end

    if @suggestion_1.save && (@suggestion_2 && suggestion_2.save)
      flash[:notice] = 'Combo added succesfully! Nice!'
      redirect_to root_path
    else
      flash[:notice] = @suggestion.errors.full_messages.to_sentence
      redirect_to new_suggestion_path
    end


  end

  private

  def suggestion_params
    params.require(:suggestion).permit(:genre, :topping, :topping)
  end
end
