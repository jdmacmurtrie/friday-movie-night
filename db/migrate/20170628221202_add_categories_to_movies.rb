class AddCategoriesToMovies < ActiveRecord::Migration[5.0]
  def change
    add_column :movies, :description, :string
    add_column :movies, :poster, :string
    add_column :movies, :created_at, :datetime
    add_column :movies, :updated_at, :datetime
  end
end
