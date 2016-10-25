Rails.application.routes.draw do
  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'

  devise_for :users
  get '/tweets/:username', to: "home#tweets", as: 'home_tweets'

  root to: "home#index"
end
