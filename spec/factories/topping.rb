FactoryBot.define do
  factory :topping do
    name 'Ham'

    trait :mushroom do
      name "Mushroom"
    end

    trait :sausage do
      name "Sausage"
    end

    trait :bacon do
      name "Bacon"
    end

    trait :grilled_chicken do
      name "Grilled Chicken"
    end
  end
end
