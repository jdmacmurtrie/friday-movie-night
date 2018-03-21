class Api::V1::CombosController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    first_combo = Combo.create(
      genre: Genre.find_by_name(params["genre"]),
      topping: Topping.find_by_name(params["firstTopping"]),
      user: current_user
    )
    unless params["secondTopping"].empty?
      second_combo = Combo.create(
        genre: Genre.find_by_name(params["genre"]),
        topping: Topping.find_by_name(params["secondTopping"]),
        user: current_user
      )
      binding.pry
      render json: [first_combo, second_combo]
    else
      render json: first_combo
    end
  end

  def destroy
    Combo.find(params[:id]).destroy
    redirect_to user_path(current_user)
  end
end
