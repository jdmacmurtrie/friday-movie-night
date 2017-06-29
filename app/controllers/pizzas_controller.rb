class PizzasController < ApplicationController
  def new
    @pizza = Pizza.new
  end

  def create
  end
end
