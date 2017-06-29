# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170628221202) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "genres", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "movie_genres", force: :cascade do |t|
    t.integer "movie_id"
    t.integer "genre_id"
    t.index ["genre_id"], name: "index_movie_genres_on_genre_id", using: :btree
    t.index ["movie_id"], name: "index_movie_genres_on_movie_id", using: :btree
  end

  create_table "movies", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.string   "poster"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "suggestions", force: :cascade do |t|
    t.integer  "topping_id",               null: false
    t.integer  "genre_id",                 null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.integer  "order_number", default: 0, null: false
  end

  create_table "toppings", force: :cascade do |t|
    t.string "name", null: false
  end

end