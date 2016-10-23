Rails.application.routes.draw do
  get 'home/tweets'

  root to: "home#index"
end
