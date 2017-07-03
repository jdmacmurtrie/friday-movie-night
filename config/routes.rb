Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
  get 'users/sign_out' => "devise/sessions#destroy"
  root 'choices#index'

  resources :choices, only: [:index]
  resources :toppings
  resources :movies
end
