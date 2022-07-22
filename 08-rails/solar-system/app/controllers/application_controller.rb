class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token # You will only need this for handwritten POST forms
end
