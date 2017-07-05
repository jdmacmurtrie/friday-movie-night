class SimplifyMoveGenreAssociation < ActiveRecord::Migration[5.0]
  def up
    drop_table :movie_genres
    add_column :movies, :genre_id, :integer
  end

  def down
    create_table "movie_genres", force: :cascade do |t|
      t.references :movie_id
      t.references :genre_id
    end

    remove_column :movies, :genre_id
  end
end
