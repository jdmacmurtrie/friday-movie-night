require 'rails_helper'

RSpec.describe Topping, type: :model do
  it { should have_many :combos }

  it { should have_valid(:name).when("Cheese") }
  it { should_not have_valid(:name).when(nil, "") }
end
