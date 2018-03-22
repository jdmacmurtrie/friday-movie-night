class Api::V1::CombosController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    new_combo = Combo.create(
      genre: Genre.find_by_name(params["genre"]),
      topping: Topping.find_by_name(params["topping"]),
      user: current_user
    )
    render json: new_combo
  end

  def destroy
    combo = Combo.find(params["id"])
    combo.destroy
    render json: combo.user.combos
  end
end
