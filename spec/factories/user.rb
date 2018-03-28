FactoryBot.define do
  factory :user do
    first_name 'Bob'
    last_name 'Msith'
    sequence(:email) { |n| "darth.bob#{n}@email.com" }
    password 'darthb'
  end
end
