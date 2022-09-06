Rails.application.routes.draw do
  resources :users, only: [:index, :create, :update]
  # resources :crew_members
  resources :productions, only: [:index, :show, :create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "/productions/:id/summary", to: "productions#summary"
  get "/add_session", to: "sessions#add_session"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
end
