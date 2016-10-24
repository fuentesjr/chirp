class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def tweets
    twitter_username = params[:username]
    num_tweets = params[:count] || 25
    @tweets = fetch(twitter_username, num_tweets)
    render :json => @tweets, status: :ok
  end

  private
    def fetch(username, count)
      Rails.cache.fetch("tweets/#{username}", expires_in: 15.seconds) do
        Rails.logger.info("[DEBUG] Fetching from Twitter...")
        $client.user_timeline(username, count: count)
      end
    end
end
