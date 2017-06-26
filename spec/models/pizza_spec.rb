require 'rails_helper'

RSpec.describe Pizza, type: :model do
  it { should have_many :toppings }
end
