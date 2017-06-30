class MoviesController < ApplicationController
  def new; end

  def show
    search = params[:id].split(',')
    if search.first == 'title'
      key = ENV["TMDB_KEY"]
      movies = HTTParty.get(
      "https://api.themoviedb.org/3/search/movie?api_key=#{key}&language=en-US&query=#{search.last}&page=1&include_adult=false")
      if movies.parsed_response['results'].empty?
        || movies.parsed_response['results'][0]['genre_ids'].empty?
        flash[:alert] = "I didn't recognize that movie."
        redirect_to new_movie_path
        return
      else
        @title = movies.parsed_response['results'].first['title']
        genre_id = movies.parsed_response['results'].first['genre_ids'].sample
        genres = HTTParty.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=#{key}")
        genres.parsed_response['genres'].each do |genre|
          if genre["id"] == genre_id
            @genre = Genre.find_by(name: genre["name"])
          end
        end
      end
    end

    if search.first == 'genre'
      @genre = Genre.find_by(name: search.last)
    end

    if @title
      @message = "Based on your choice of #{@title},
      I recommend these toppings:"
    else
      @message = "Here are the toppings recommended for #{@genre.name} movies:"
    end
  end
end
