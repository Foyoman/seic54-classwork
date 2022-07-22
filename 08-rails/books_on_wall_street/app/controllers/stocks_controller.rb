class StocksController < ApplicationController
    StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')

    def form
    end

    def info
        info = StockQuote::Stock.quote params[:code]
        @price = info.close
    
        render :info
    end
end