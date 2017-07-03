class Suggestion < ApplicationRecord
  belongs_to :genre
  belongs_to :topping

  validates :genre_id, presence: true
  validates :topping_id, presence: true
  validates :order_number, presence: true

end
