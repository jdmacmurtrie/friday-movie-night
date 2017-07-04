class Suggestion < ApplicationRecord
  belongs_to :genre
  belongs_to :topping
  belongs_to :user

  validates :genre_id, presence: true
  validates :topping_id, presence: true
end
