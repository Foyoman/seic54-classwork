require 'sinatra'
require 'sinatra/reloader'

# ERB: Embedded Ruby

get '/' do
    erb :home
end

# SCOPE

get '/result' do
    x = params[:x].to_f
    y = params[:y].to_f

    @result = case params[:operator]
    when '+' then x + y
    when '-' then x - y
    when '*' then x * y
    when '/' then x / y
    end

    erb :result
end

# Instance variable
# @ - little hat

# Error Driven Development
# Test Driven Development