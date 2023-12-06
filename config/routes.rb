Rails.application.routes.draw do
  # devise_for :users
  resources :appointments

  default_url_options :host => "http://127.0.0.1:3001"
  namespace :api do
  resources :users
  resources :appointments
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
#  get "/users", to: "users#index"
get "/users/id:", to: "user#show"
#  get "/me", to: "users#show"
 post "/signup", to: "users#create"
 post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  end
end
