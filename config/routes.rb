Rails.application.routes.draw do
  root 'choices#index'

  resources :choices, only: [:index]
  resources :toppings
  resources :movies
end
