require "sinatra"
require 'pry'
require 'csv'

set :bind, '0.0.0.0'  # bind to all interfaces

get "/" do
  redirect '/grocery-list'
end

get '/grocery-list' do
  @food_items = CSV.readlines("grocery_list.csv", headers: true)
  erb :grocery_list
end

post '/grocery-list' do
  @name = params[:name]

  if @name == ""
    redirect '/grocery-list'
  else
    CSV.open("grocery_list.csv", "a", headers: true) do |csv|
      csv.puts([@name])
    end
  end
    redirect '/grocery-list'
end
