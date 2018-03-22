class Topping < ApplicationRecord
  has_many :combos
  has_many :genres, through: :combos

  validates :name, presence: true
end
