require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get root_url
    assert_response :success
    assert_select "h2", "Welcome Home"
  end

  test "should get tweets" do
    get home_tweets_url
    assert_response :success
  end

end
