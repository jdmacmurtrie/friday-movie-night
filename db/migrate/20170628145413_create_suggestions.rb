class CreateSuggestions < ActiveRecord::Migration[5.0]
  def change
    create_table :suggestions do |t|
      t.integer :topping_1_id, null: false
      t.integer :topping_2_id
      t.integer :genre, null: false

      t.timestamps
    end
  end
end
