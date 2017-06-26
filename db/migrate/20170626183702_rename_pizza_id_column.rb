class RenamePizzaIdColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :movie_genres, :pizza_id, :genre_id
  end
end
