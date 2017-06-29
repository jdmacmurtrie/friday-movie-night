Rails.application.routes.draw do
  root 'choices#index'

  resources :choices, only: [:index]
  resources :suggestions
  resources :toppings
  resources :movies
end
