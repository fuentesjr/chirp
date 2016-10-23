class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def tweets
    render json: {status: :ok}, status: :ok
  end
end
