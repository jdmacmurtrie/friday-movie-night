class Topping < ApplicationRecord
  has_many :suggestions
  has_many :genres, through: :suggestions
end
