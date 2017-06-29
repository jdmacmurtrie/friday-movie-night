class AddOrderNumber < ActiveRecord::Migration[5.0]
  def change
    add_column :suggestions, :order_number, :integer, null: false, default: 0
  end
end
