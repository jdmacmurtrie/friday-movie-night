class Api::V1::MoviesController < ApplicationController
  def index
    search = params[:params].split(',')
    @selected_genre = nil
    if search.first == 'title'
      key = ENV["TMDB_KEY"]
      movies = HTTParty.get(
        "https://api.themoviedb.org/3/search/movie?api_key=#{key}&language=en-US&query=#{search.last}&page=1&include_adult=false"
      )
      if movies.parsed_response['results'].empty? ||
          movies.parsed_response['results'][0]['genre_ids'].empty?
        flash[:alert] = "I didn't recognize that movie."
        redirect_to new_movie_path
        return
      else
        @title = movies.parsed_response['results'].first['title']
        genre_id = movies.parsed_response['results'].first['genre_ids'].sample
        genres = HTTParty.get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=#{key}"
        )
        genres.parsed_response['genres'].each do |genre|
          if genre["id"] == genre_id
            @selected_genre = Genre.find_by(name: genre["name"])
          end
        end
      end
    end

    if search.first == 'genre'
      @selected_genre = Genre.find_by(name: search.last)
    end

    @toppings = []
    if current_user
      current_user.suggestions.each do |sugg|
        if sugg.genre == @selected_genre
          @toppings << sugg.topping
        end
      end
    end
    if @toppings.empty?
      @selected_genre.toppings.each do |topping|
        @toppings << topping if Suggestion.find_by(topping: topping).user.nil?
      end
    end
    render json: { toppings: @toppings }
  end
end
