class Genre < ApplicationRecord
  has_many :movies
  has_many :combos
  has_many :toppings, through: :combos

  validates :name, presence: true
end
