Rails.application.routes.draw do
  resources :appointments

  default_url_options :host => "http://localhost:3001"
  # namespace :api do
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
#  get "/users", to: "users#index"
 get "/me", to: "users#show"
 post "/signup", to: "users#create"
 post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # end
end
