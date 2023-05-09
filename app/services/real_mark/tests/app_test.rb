require 'minitest/autorun'
require_relative '../app'
require 'rack/test'

class RealMarkTrackAppTest < Minitest::Test
  include Rack::Test::Methods

  def app
    @app
  end

  def setup
    @app = RealMarkTrackApp.new

    # Crear un usuario de prueba
    @user = User.create(
      email: "test@example.com", 
      username: "testuser", 
      password: "testpassword"
    )
    # Crear un cuestionario de prueba
    @questionnaire = Questionnaire.create(
      user_id: @user.id, 
      questionnaire_name: "Test", 
      calculated_mark: 4.0, 
      real_mark: nil
    )
  end

  def test_update_real_mark
    # Asumiendo que tienes un questionnaire con id 1
    data = { "questionnaire_id" => @questionnaire.id, "real_mark" => 5.0 }.to_json
    post '/update_real_mark', data, "CONTENT_TYPE" => "application/json"

    assert_equal 200, last_response.status, "Error: #{last_response.body}"
    assert_equal({ 'message' => 'Real mark updated successfully' }.to_json, last_response.body)

    questionnaire = Questionnaire.find(@questionnaire.id)
    assert_equal 5.0, questionnaire.real_mark
  end

  def teardown
    @questionnaire.destroy
    @user.destroy
  end

end
