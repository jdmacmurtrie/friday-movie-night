class RenameJoinTable < ActiveRecord::Migration[5.0]
  def change
    rename_table :moviegenres, :movie_genres
  end
end
