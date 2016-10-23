Rails.application.routes.draw do
  devise_for :users
  get '/tweets/:username', to: "home#tweets", as: 'home_tweets'

  root to: "home#index"
end
