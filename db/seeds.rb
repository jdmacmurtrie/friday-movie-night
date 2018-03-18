Topping.destroy_all
Genre.destroy_all
Suggestion.destroy_all

genres = [
  'Action', 'Comedy', 'Drama', 'Family', 'War', 'Horror',
  'Music', 'Science Fiction', 'Fantasy', 'Romance', 'Mystery',
  'Western', 'History', 'Documentary', 'Animation', 'Thriller', 'Adventure'
]

toppings = {
  'Extra Cheese' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/icons8-cheese-50.png',
  'Pepperoni' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/pepperoni-cliparts-16.jpg',
  'Sausage' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/ham-clipart-16.jpg',
  'Ham' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/pineapple-vector-13.jpg',
  'Pineapple' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/mekonee-29-vegetables-set-11.svg',
  'Green Pepper' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/icons8-mushroom-50.png',
  'Mushroom' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/chicken-leg-clipart-2.jpg',
  'Grilled Chicken' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/bacon-png-7.jpg',
  'Bacon' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/bacon-png-7.jpg',
  'Olives' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/icons8-olive-50.png'
}

toppings.each do |name, image|
  Topping.create(name: name, image: image)
end
binding.pry

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
