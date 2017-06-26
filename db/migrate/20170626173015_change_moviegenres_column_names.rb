class ChangeMoviegenresColumnNames < ActiveRecord::Migration[5.0]
  def up
    rename_column :moviegenres, :movie_id_id, :movie_id
    rename_column :moviegenres, :pizza_id_id, :pizza_id
  end

  def down
    rename_column :moviegenres, :movie_id, :movie_id_id
    rename_column :moviegenres, :pizza_id, :pizza_id_id
  end
end
