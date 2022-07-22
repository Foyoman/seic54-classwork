Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/books' => 'books#form'
  get '/books/info' => 'books#info'

  get '/stocks' => 'stocks#form'
  get '/stocks/info' => 'stocks#info'
end
