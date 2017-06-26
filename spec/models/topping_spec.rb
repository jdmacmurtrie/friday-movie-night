require 'rails_helper'

RSpec.describe Topping, type: :model do
  it { should belong_to :pizza }
end
