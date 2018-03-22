class UpdateToppingsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :toppings, :image, :string, null: false, default: ''
  end
end
