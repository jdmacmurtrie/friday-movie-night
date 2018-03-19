Rails.application.routes.draw do

  root to: 'static_pages#index'
  get "/static_pages/:static_page" => "static_pages#index"
  get "/users/:id" => "static_pages#index"

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  get 'movies/new' => "static_pages#index"
  get 'toppings/new' => "static_pages#index"
  get 'users/sign_out' => "devise/sessions#destroy"
  get 'movies/recommendations/:params' => "movies#index"
  get 'toppings/recommendations/:params' => "toppings#index"

  namespace :api do
    namespace :v1 do
      resources :movies, only: [:index]
      resources :toppings, only: [:index]
      resources :users, only: [:show]
    end
  end

  resources :users, except: [:new, :create]
  resources :choices, only: [:index]
  resources :toppings, only: [:new, :show] do
    resources :recommendations
  end
  resources :movies, only: [:new, :show] do
    resources :recommendations, only: :show
  end
  resources :combos
end
