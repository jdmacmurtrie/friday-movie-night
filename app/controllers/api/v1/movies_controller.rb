class Api::V1::MoviesController < ApplicationController
	def index
		searched = params[:params].split(',')
		if searched.first == 'title'
			search_by_title(searched)
		else
			@selected_genre = Genre.find_by(name: searched.last)
		end

		if current_user
			pick_user_combo
		elsif @selected_genre
			pick_topping_suggestion
		end

		if @toppings
			render json: { toppings: @toppings }
		else
			render status: 422, json: { error: "Not a real movie!" }.as_json
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

	def pick_user_combo
		user_toppings = current_user.combos.map do |combo|
			combo.topping if combo.genre == @selected_genre
		end

		if user_toppings.first.nil?
			pick_topping_suggestion
		else
			@toppings = user_toppings.sample(2)
		end
	end

	def pick_topping_suggestion
		@toppings = @selected_genre.toppings.select do |topping|
			topping if Combo.where(topping: topping, user: nil)
		end
	end
end
