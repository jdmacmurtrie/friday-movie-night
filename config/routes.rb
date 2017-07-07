Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :movies, only: [:index]
      resources :toppings, only: [:index]
    end
  end

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  get 'users/sign_out' => "devise/sessions#destroy"
  get 'movies/recommendations/:params' => "movies#index"
  get 'toppings/recommendations/:params' => "toppings#index"
  root 'choices#index'

  resources :users, except: [:index, :new, :create]
  resources :choices, only: [:index]
  resources :toppings, only: [:new, :show] do
    resources :recommendations
  end
  resources :movies, only: [:new, :show] do
    resources :recommendations
  end
  resources :suggestions
end
