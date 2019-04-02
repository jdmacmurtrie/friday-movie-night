class SwtichIdColumnsBetweenPizzaAndToppings < ActiveRecord::Migration[5.0]
  def up
    remove_column :pizzas, :topping_id
    add_column :toppings, :pizza_id, :integer, null: false, default: 0
  end

  def down
    add_column :pizzas, :topping_id, null: false
    remove_column :toppings, :pizza_id
  end
end
