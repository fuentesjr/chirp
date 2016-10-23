Rails.application.routes.draw do
  devise_for :users
  get 'home/tweets'

  root to: "home#index"
end
