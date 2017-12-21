class Api::V1::MoviesController < ApplicationController
	def index
		searched = params[:params].split(',')

		if searched.first == 'title'
			search_by_title(searched)
		else
			@selected_genre = Genre.find_by(name: searched.last)
		end

		if current_user
			all_toppings = current_user.map do |suggestion|
				suggestion if suggestion.genre == @selected_genre
				@toppings = all_toppings.sample(2)
			end
		elsif @selected_genre
			@toppings = @selected_genre.toppings.map do |topping|
				topping if Suggestion.find_by(topping: topping).user.nil?
			end
		end

		if @toppings
			render json: { toppings: @toppings, title: @title }
		else
			render status: 422
		end
	end

	private

	def search_by_title(searched)
		key = ENV["TMDB_KEY"]
		movies = HTTParty.get(
			"https://api.themoviedb.org/3/search/movie?api_key=#{key}&query=#{searched.last}&page=1"
		)
		if bad_search(movies)
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

	def bad_search(movies)
		movies.parsed_response['results'].empty? ||
		movies.parsed_response['results'][0]['genre_ids'].empty?
	end
end
