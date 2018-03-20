class Api::V1::ToppingsController < ApplicationController
  def index
    determine_toppings

    if current_user
      pick_user_combo
    else
      pick_genre_suggestion
    end

    key = ENV["TMDB_KEY"]
    genres = HTTParty.get("https://api.themoviedb.org/3/genre/movie/list?api_key=#{key}")
    get_genre_id(genres)

    movies = HTTParty.get("https://api.themoviedb.org/3/genre/#{@genre_id}/movies?api_key=#{key}&page=#{random_number}")
    twelve_movies = movies.parsed_response['results'].sample(12)

    @movie_suggestions = twelve_movies.map do |movie|
      Movie.create(
        title: movie['title'],
        description: movie['overview'],
        poster: movie['poster_path'],
        genre: @genre_suggestion
      )
    end
    render json: { movies: @movie_suggestions, genre: @genre_suggestion }
  end

  private

  def determine_toppings
    selected_toppings = params[:params].split(',')
    @toppings = []
    selected_toppings.each do |topping|
      unless topping.blank?
        @toppings << Topping.find_by(name: topping)
      end
    end
  end

  def random_number
    rand(10)+1
  end

  def pick_user_combo
    user_genres = current_user.suggestions.map do |suggestion|
      suggestion.genre if @toppings.include?(suggestion.topping)
    end
    if user_genres.first.nil?
      pick_genre_suggestion
    else
      @genre_suggestion = user_genres.sample
    end
  end

  def pick_genre_suggestion
    all_suggestions = @toppings.map { |topping| topping.genres }
    simplified_suggestion = all_suggestions.inject(:&)
    if !simplified_suggestion.empty?
      @genre_suggestion = simplified_suggestion[0]
      how_many_suggestions(simplified_suggestion)
    else
      @genre_suggestion = all_suggestions.flatten.sample
    end
  end

  def how_many_suggestions(simplified_suggestion)
    if simplified_suggestion.length > 1
      @genre_suggestion = simplified_suggestion.sample
    end
  end

  def get_genre_id(genres)
    genres['genres'].each do |genre|
      if genre['name'] == @genre_suggestion.name
        @genre_id = genre['id']
      end
    end
  end
end
