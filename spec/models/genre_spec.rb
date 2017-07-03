require 'rails_helper'

RSpec.describe Genre, type: :model do
  it { should have_many :movies }
  it { should have_many :movie_genres }
  it { should have_many :suggestions }

  it { should have_valid(:name).when("Action") }
  it { should_not have_valid(:name).when(nil, "") }

end
