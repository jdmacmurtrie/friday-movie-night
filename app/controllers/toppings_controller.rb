class ToppingsController < ApplicationController
  def new; end

  def show
    toppings = params[:id].split(',')
    @toppings = []
    toppings.each do |topping|
      unless topping.blank?
        @toppings << Topping.find_by(name: topping)
      end
    end
    all_suggestions = @toppings.map { |topping| topping.genres }
    one_suggestion = all_suggestions.inject(:&)
    if !one_suggestion.empty?
      @genre_suggestion = one_suggestion[0]
      if one_suggestion.length > 1
        @genre_suggestion = one_suggestion.sample
      end
    else
      @genre_suggestion = all_suggestions.flatten.sample
    end
    genre_id = 0
    key = ENV["TMDB_KEY"]
    genres = HTTParty.get("https://api.themoviedb.org/3/genre/movie/list?api_key=#{key}")
    genres.parsed_response['genres'].each do |genre|
      if genre['name'] == @genre_suggestion.name
        genre_id = genre['id']
      end
    end
    @movie_suggestions = []
    movies = HTTParty.get("https://api.themoviedb.org/3/genre/#{genre_id}/movies?api_key=#{key}&language=en-US&include_adult=false&sort_by=created_at.asc")
    movies.parsed_response['results'].sample(5).each do |movie|
      @movie_suggestions << Movie.create(
      title: movie['title'],
      description: movie['overview'],
      poster: movie['poster_path']
      )
    end
  end
end
