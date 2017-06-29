require 'rails_helper'

RSpec.describe Suggestion, type: :model do
  it { should belong_to :genre }
  it { should belong_to :topping }
end
