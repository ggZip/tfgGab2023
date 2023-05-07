require 'sinatra/base'
require 'sinatra/activerecord'
require_relative 'models'

class RealMarkTrackApp < Sinatra::Base
  register Sinatra::ActiveRecordExtension

  set :database, "postgresql://gabuntu:gabuntuPassword@db:5432/mydb"
  set :port, 3005
  set :bind, '0.0.0.0'
  
  post '/update_real_mark' do
    content_type :json

    data = JSON.parse(request.body.read)
    questionnaire_id = data["questionnaire_id"]
    real_mark = data["real_mark"]

    questionnaire = Questionnaire.find(questionnaire_id)
    questionnaire.real_mark = real_mark
    questionnaire.save

    status 200
    { message: "Real mark updated successfully" }.to_json
  end

  run! if __FILE__ == $0
end
