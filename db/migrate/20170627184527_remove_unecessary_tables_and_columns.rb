class RemoveUnecessaryTablesAndColumns < ActiveRecord::Migration[5.0]
  def up
    drop_table :pizzas
    remove_column :toppings, :pizza_id
  end

  def down
    create_table :pizzas
    add_column :toppings, :pizza_id, :integer
  end
end
