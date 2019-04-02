FactoryBot.define do
  factory :genre do
    name 'Comedy'

    trait :romance do
      name 'Romance'
    end

    trait :action do
      name 'Action'
    end

    trait :drama do
      name 'Drama'
    end
  end
end
