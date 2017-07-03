
toppings = ['Extra Cheese', 'Pepperoni', 'Sausage', 'Ham', 'Pineapple', 'Green Pepper', 'Mushroom', 'Grilled Chicken', 'Bacon', 'Olives']
genres = ['Action', 'Comedy', 'Drama', 'Family', 'War', 'Horror',
'Music', 'Science Fiction', 'Fantasy', 'Romance', 'Mystery',
'Western', 'History', 'Documentary', 'Animation', 'Thriller', 'Adventure']


Topping.destroy_all
Genre.destroy_all
Suggestion.destroy_all

toppings.each do |topping|
  Topping.create(name: topping)
end

genres.each do |genre|
  Genre.create(name: genre)
end

Suggestion.create(genre: Genre.find_by(name: 'Action'), topping: Topping.find_by(name: 'Sausage'), order_number: 1)
Suggestion.create(genre: Genre.find_by(name: 'Comedy'), topping: Topping.find_by(name: 'Ham'), order_number: 2)
Suggestion.create(genre: Genre.find_by(name: 'Family'), topping: Topping.find_by(name: 'Extra Cheese'), order_number: 3)
Suggestion.create(genre: Genre.find_by(name: 'Horror'), topping: Topping.find_by(name: 'Pepperoni'), order_number: 4)
Suggestion.create(genre: Genre.find_by(name: 'Romance'), topping: Topping.find_by(name: 'Mushroom'), order_number: 5)
Suggestion.create(genre: Genre.find_by(name: 'Mystery'), topping: Topping.find_by(name: 'Green Pepper'), order_number: 6)
Suggestion.create(genre: Genre.find_by(name: 'Western'), topping: Topping.find_by(name: 'Grilled Chicken'), order_number: 7)
Suggestion.create(genre: Genre.find_by(name: 'Documentary'), topping: Topping.find_by(name: 'Olives'), order_number: 8)
Suggestion.create(genre: Genre.find_by(name: 'Animation'), topping: Topping.find_by(name: 'Pineapple'), order_number: 9)
Suggestion.create(genre: Genre.find_by(name: 'Thriller'), topping: Topping.find_by(name: 'Bacon'), order_number: 10)
Suggestion.create(genre: Genre.find_by(name: 'Drama'), topping: Topping.find_by(name: 'Extra Cheese'), order_number: 11)
Suggestion.create(genre: Genre.find_by(name: 'Drama'), topping: Topping.find_by(name: 'Pepperoni'), order_number: 11)
Suggestion.create(genre: Genre.find_by(name: 'War'), topping: Topping.find_by(name: 'Grilled Chicken'), order_number: 12)
Suggestion.create(genre: Genre.find_by(name: 'War'), topping: Topping.find_by(name: 'Olives'), order_number: 12)
Suggestion.create(genre: Genre.find_by(name: 'Music'), topping: Topping.find_by(name: 'Ham'), order_number: 13)
Suggestion.create(genre: Genre.find_by(name: 'Music'), topping: Topping.find_by(name: 'Pineapple'), order_number: 13)
Suggestion.create(genre: Genre.find_by(name: 'Science Fiction'), topping: Topping.find_by(name: 'Sausage'), order_number: 14)
Suggestion.create(genre: Genre.find_by(name: 'Science Fiction'), topping: Topping.find_by(name: 'Mushroom'), order_number: 14)
Suggestion.create(genre: Genre.find_by(name: 'Fantasy'), topping: Topping.find_by(name: 'Bacon'), order_number: 15)
Suggestion.create(genre: Genre.find_by(name: 'Fantasy'), topping: Topping.find_by(name: 'Sausage'), order_number: 15)
Suggestion.create(genre: Genre.find_by(name: 'History'), topping: Topping.find_by(name: 'Olives'), order_number: 16)
Suggestion.create(genre: Genre.find_by(name: 'History'), topping: Topping.find_by(name: 'Green Pepper'), order_number: 16)
Suggestion.create(genre: Genre.find_by(name: 'Adventure'), topping: Topping.find_by(name: 'Bacon'), order_number: 17)
Suggestion.create(genre: Genre.find_by(name: 'Adventure'), topping: Topping.find_by(name: 'Grilled Chicken'), order_number: 17)


# genre_id = 0
# key = ENV["TMDB_KEY"]
# # all genres:
# genres = HTTParty.get("https://api.themoviedb.org/3/genre/movie/list?api_key=#{key}")
# # movie by genre:
# #genre ids of first adventure movie:
# # movies.parsed_response["results"][0]['genre_ids']
# genres.parsed_response['genres'].each do |genre|
#   if genre['name'] == 'Action'
#     genre_id = genre['id']
#   end
# end
# movies = HTTParty.get("https://api.themoviedb.org/3/genre/#{genre_id}/movies?api_key=#{key}&language=en-US&include_adult=false&sort_by=created_at.asc")
# binding.pry
