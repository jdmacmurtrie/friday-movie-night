class CreateMoviegenres < ActiveRecord::Migration[5.0]
  def change
    create_table :moviegenres do |t|
      t.references :movie_id
      t.references :pizza_id
    end
  end
end
