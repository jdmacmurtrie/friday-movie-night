class RemoveMoviegenreColumn < ActiveRecord::Migration[5.0]
  def up
    remove_column :movies, :moviegenres_id
  end

  def down
    add_column :movies, :moviegenres_id
  end
end
