class ChangeToppingsInSuggestions < ActiveRecord::Migration[5.0]
  def up
    rename_column :suggestions, :topping_1_id, :topping_id
    remove_column :suggestions, :topping_2_id
    rename_column :suggestions, :genre, :genre_id
  end

  def down
    rename_column :suggestions, :topping_id, :topping_1_id
    add_column :suggestions, :topping_2_id, :integer
    rename_column :suggestions, :genre_id, :genre
  end
end
