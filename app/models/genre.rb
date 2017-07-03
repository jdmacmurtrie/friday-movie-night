class Genre < ApplicationRecord
  has_many :movie_genres
  has_many :movies, through: :movie_genres
  has_many :suggestions
  has_many :toppings, through: :suggestions

  validates :name, presence: true
end
