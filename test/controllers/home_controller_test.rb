require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers

  test "accessing site redirects to login/sign-in page" do
    get root_url
    assert_response :redirect
    follow_redirect!
    assert_response :success
    assert_select "h2", "Log in"
  end

  test "after sign-in, we see our app/data" do
    sal = users(:sal)
    sign_in sal
    get "/"
    assert_response :success
    assert_select "#user_nav", /Logged in as #{sal.email}./
    sign_out :user
  end

  test "should get tweets response ok" do
    get home_tweets_url
    assert_response :redirect
    follow_redirect!
    assert_response :success
  end

end
