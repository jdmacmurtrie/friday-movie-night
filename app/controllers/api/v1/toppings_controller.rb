class Api::V1::ToppingsController < ApplicationController
  def index
    toppings = params[:params].split(',')
    @toppings = []
    toppings.each do |topping|
      unless topping.blank?
        @toppings << Topping.find_by(name: topping)
      end
    end

    if current_user
      user_genres = []
      current_user.suggestions.each do |sugg|
        user_genres << sugg.genre if @toppings.include?(sugg.topping)
      end
      @genre_suggestion = user_genres.sample
    end

    if current_user.nil? || !@genre_suggestion
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
    end

    genre_id = 0
    key = ENV["TMDB_KEY"]
    genres = HTTParty.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=#{key}"
    )
    genres.parsed_response['genres'].each do |genre|
      if genre['name'] == @genre_suggestion.name
        genre_id = genre['id']
      end
    end
    @movie_suggestions = []
    movies = HTTParty.get("https://api.themoviedb.org/3/genre/#{genre_id}/movies?api_key=#{key}&language=en-US&include_adult=false&sort_by=created_at.asc&page=#{random_number}")
    movies.parsed_response['results'].sample(4).each do |movie|
      @movie_suggestions << Movie.create(
        title: movie['title'],
        description: movie['overview'],
        poster: movie['poster_path'],
        genre: @genre_suggestion
      )
    end
    render json: { movies: @movie_suggestions }
  end

  def random_number
    rand(10)+1
  end
end
