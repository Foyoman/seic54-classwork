require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX
get '/butterflies' do
    # connect to the database
    # set results as hash to true
    # SELECT * FROM butterflies
    @butterflies = query_db 'SELECT * FROM butterflies'
    # render :butterflies_index
    erb :butterflies_index
end

# NEW
get '/butterflies/new' do
    erb :butterflies_new
end

#CREATE
post '/butterflies' do
    query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
    redirect to('/butterflies') # GET request
end

# SHOW
get '/butterflies/:id' do
    @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
    @butterfly = @butterfly.first # Pluck the single butterfly from the aray
    erb :butterflies_show
end

# EDIT
get '/butterflies/:id/edit' do
    # a prefilled form to edit an existing butterfly
    # get the butterfly
    @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
    @butterfly = @butterfly.first
    erb :butterflies_edit
    # render the form
end

# UPDATE 
post '/butterflies/:id' do
    query_db "UPDATE butterflies SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/butterflies/#{ params[:id] }") # GET request
end

# DESTROY
get '/butterflies/:id/delete' do
    query_db "DELETE FROM butterflies WHERE id=#{ params[:id] }"
    redirect to('/butterflies')
end

def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results #implicit return
end