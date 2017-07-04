
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

Suggestion.create(genre: Genre.find_by(name: 'Action'), topping: Topping.find_by(name: 'Sausage'))
Suggestion.create(genre: Genre.find_by(name: 'Comedy'), topping: Topping.find_by(name: 'Ham'))
Suggestion.create(genre: Genre.find_by(name: 'Family'), topping: Topping.find_by(name: 'Extra Cheese'))
Suggestion.create(genre: Genre.find_by(name: 'Horror'), topping: Topping.find_by(name: 'Pepperoni'))
Suggestion.create(genre: Genre.find_by(name: 'Romance'), topping: Topping.find_by(name: 'Mushroom'))
Suggestion.create(genre: Genre.find_by(name: 'Mystery'), topping: Topping.find_by(name: 'Green Pepper'))
Suggestion.create(genre: Genre.find_by(name: 'Western'), topping: Topping.find_by(name: 'Grilled Chicken'))
Suggestion.create(genre: Genre.find_by(name: 'Documentary'), topping: Topping.find_by(name: 'Olives'))
Suggestion.create(genre: Genre.find_by(name: 'Animation'), topping: Topping.find_by(name: 'Pineapple'))
Suggestion.create(genre: Genre.find_by(name: 'Thriller'), topping: Topping.find_by(name: 'Bacon'))
Suggestion.create(genre: Genre.find_by(name: 'Drama'), topping: Topping.find_by(name: 'Extra Cheese'))
Suggestion.create(genre: Genre.find_by(name: 'Drama'), topping: Topping.find_by(name: 'Pepperoni'))
Suggestion.create(genre: Genre.find_by(name: 'War'), topping: Topping.find_by(name: 'Grilled Chicken'))
Suggestion.create(genre: Genre.find_by(name: 'War'), topping: Topping.find_by(name: 'Olives'))
Suggestion.create(genre: Genre.find_by(name: 'Music'), topping: Topping.find_by(name: 'Ham'))
Suggestion.create(genre: Genre.find_by(name: 'Music'), topping: Topping.find_by(name: 'Pineapple'))
Suggestion.create(genre: Genre.find_by(name: 'Science Fiction'), topping: Topping.find_by(name: 'Sausage'))
Suggestion.create(genre: Genre.find_by(name: 'Science Fiction'), topping: Topping.find_by(name: 'Mushroom'))
Suggestion.create(genre: Genre.find_by(name: 'Fantasy'), topping: Topping.find_by(name: 'Bacon'))
Suggestion.create(genre: Genre.find_by(name: 'Fantasy'), topping: Topping.find_by(name: 'Sausage'))
Suggestion.create(genre: Genre.find_by(name: 'History'), topping: Topping.find_by(name: 'Olives'))
Suggestion.create(genre: Genre.find_by(name: 'History'), topping: Topping.find_by(name: 'Green Pepper'))
Suggestion.create(genre: Genre.find_by(name: 'Adventure'), topping: Topping.find_by(name: 'Bacon'))
Suggestion.create(genre: Genre.find_by(name: 'Adventure'), topping: Topping.find_by(name: 'Grilled Chicken'))


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
