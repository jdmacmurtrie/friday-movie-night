Rails.application.routes.draw do
  root 'choices#index'

  resources :choices, only: [:index]
  resources :pizzas
  resources :movies
end
