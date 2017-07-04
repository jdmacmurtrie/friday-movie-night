class AddUserToSuggestions < ActiveRecord::Migration[5.0]
  def up
    add_column :suggestions, :user_id, :integer
    remove_column :suggestions, :order_number
  end

  def down
    remove_column :suggestions, :user_id
    add_column :suggestions, :order_number, :integer
  end
end
