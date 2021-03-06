Topping.destroy_all
Genre.destroy_all
Combo.destroy_all

genres = [
  'Action', 'Comedy', 'Drama', 'Family', 'War', 'Horror',
  'Music', 'Science Fiction', 'Fantasy', 'Romance', 'Mystery',
  'Western', 'History', 'Documentary', 'Animation', 'Thriller', 'Adventure'
]

toppings = {
  'Extra Cheese' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/icons8-cheese-50.png',
  'Pepperoni' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/Pepperoni.png',
  'Sausage' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/icons8-sausage-50.png',
  'Ham' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/Ham_PNG_Clip_Art_Image-1267.png',
  'Pineapple' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/14-pineapple-png-image-download.png',
  'Green Pepper' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/mekonee-29-vegetables-set-11.svg',
  'Mushroom' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/icons8-mushroom-50.png',
  'Grilled Chicken' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/chicken.png',
  'Bacon' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/22507-5-bacon-transparent-background.png',
  'Olives' => 'https://s3.us-east-2.amazonaws.com/friday-movie-night-images/icons8-olive-50.png'
}

toppings.each do |name, image|
  Topping.create(name: name, image: image)
end

genres.each do |genre|
  Genre.create(name: genre)
end

Combo.create(genre: Genre.find_by(name: 'Action'), topping: Topping.find_by(name: 'Sausage'))
Combo.create(genre: Genre.find_by(name: 'Comedy'), topping: Topping.find_by(name: 'Ham'))
Combo.create(genre: Genre.find_by(name: 'Family'), topping: Topping.find_by(name: 'Extra Cheese'))
Combo.create(genre: Genre.find_by(name: 'Horror'), topping: Topping.find_by(name: 'Pepperoni'))
Combo.create(genre: Genre.find_by(name: 'Romance'), topping: Topping.find_by(name: 'Mushroom'))
Combo.create(genre: Genre.find_by(name: 'Mystery'), topping: Topping.find_by(name: 'Green Pepper'))
Combo.create(genre: Genre.find_by(name: 'Western'), topping: Topping.find_by(name: 'Grilled Chicken'))
Combo.create(genre: Genre.find_by(name: 'Documentary'), topping: Topping.find_by(name: 'Olives'))
Combo.create(genre: Genre.find_by(name: 'Animation'), topping: Topping.find_by(name: 'Pineapple'))
Combo.create(genre: Genre.find_by(name: 'Thriller'), topping: Topping.find_by(name: 'Bacon'))
Combo.create(genre: Genre.find_by(name: 'Drama'), topping: Topping.find_by(name: 'Extra Cheese'))
Combo.create(genre: Genre.find_by(name: 'Drama'), topping: Topping.find_by(name: 'Pepperoni'))
Combo.create(genre: Genre.find_by(name: 'War'), topping: Topping.find_by(name: 'Grilled Chicken'))
Combo.create(genre: Genre.find_by(name: 'War'), topping: Topping.find_by(name: 'Olives'))
Combo.create(genre: Genre.find_by(name: 'Music'), topping: Topping.find_by(name: 'Ham'))
Combo.create(genre: Genre.find_by(name: 'Music'), topping: Topping.find_by(name: 'Pineapple'))
Combo.create(genre: Genre.find_by(name: 'Science Fiction'), topping: Topping.find_by(name: 'Sausage'))
Combo.create(genre: Genre.find_by(name: 'Science Fiction'), topping: Topping.find_by(name: 'Mushroom'))
Combo.create(genre: Genre.find_by(name: 'Fantasy'), topping: Topping.find_by(name: 'Bacon'))
Combo.create(genre: Genre.find_by(name: 'Fantasy'), topping: Topping.find_by(name: 'Sausage'))
Combo.create(genre: Genre.find_by(name: 'History'), topping: Topping.find_by(name: 'Olives'))
Combo.create(genre: Genre.find_by(name: 'History'), topping: Topping.find_by(name: 'Green Pepper'))
Combo.create(genre: Genre.find_by(name: 'Adventure'), topping: Topping.find_by(name: 'Bacon'))
Combo.create(genre: Genre.find_by(name: 'Adventure'), topping: Topping.find_by(name: 'Grilled Chicken'))
