class HomeController < ApplicationController
  def index
  end

  def tweets
    render json: {status: :ok}, status: :ok
  end
end
