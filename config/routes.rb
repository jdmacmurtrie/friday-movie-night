Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  get 'users/sign_out' => "devise/sessions#destroy"
  root 'choices#index'

  resources :users, except: [:index, :new, :create]
  resources :choices, only: [:index]
  resources :toppings, only: [:new, :show]
  resources :movies, only: [:new, :show]
  resources :suggestions
end
