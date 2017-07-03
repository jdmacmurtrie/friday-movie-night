require 'rails_helper'

RSpec.describe Suggestion, type: :model do
  it { should belong_to :genre }
  it { should belong_to :topping }

  it { should have_valid(:genre_id).when("Action") }
  it { should_not have_valid(:genre_id).when(nil, "") }

  it { should have_valid(:topping_id).when("Cheese") }
  it { should_not have_valid(:topping_id).when(nil, "") }

  it { should have_valid(:order_number).when(1) }
  it { should_not have_valid(:order_number).when(nil, "") }

end
