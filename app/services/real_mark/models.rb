require 'sinatra/activerecord'

class Questionnaire < ActiveRecord::Base
  self.table_name = 'questionnaire'
end
