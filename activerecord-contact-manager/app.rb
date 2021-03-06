require 'sinatra'
require 'sinatra/reloader'
require "sinatra/activerecord"

require_relative 'models/contact'
also_reload 'models/contact'

set :bind, '0.0.0.0'  # bind to all interfaces

get '/' do
  @contacts = Contact.all
  erb :index
end

get '/' do
  erb :index
end

get '/contacts/:id' do
  @single_contact = Contact.find(params[:id])
  erb :show
end
