require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_valid(:first_name).when("Bob Msith") }
  it { should_not have_valid(:first_name).when(nil, "") }

  it { should have_valid(:last_name).when("Bob Msith") }
  it { should_not have_valid(:last_name).when(nil, "") }

  it { should have_valid(:email).when("Bob.Msith@smith.com") }
  it { should_not have_valid(:email).when(nil, "", "j", "j.j.j", "j@j") }

  it { should have_valid(:password).when("Bob Msith") }
  it { should_not have_valid(:password).when(nil, "") }
end
