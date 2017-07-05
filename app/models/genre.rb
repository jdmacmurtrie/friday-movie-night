class Genre < ApplicationRecord
  has_many :movies
  has_many :suggestions
  has_many :toppings, through: :suggestions

  validates :name, presence: true
end
