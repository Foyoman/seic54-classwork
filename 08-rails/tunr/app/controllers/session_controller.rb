class SessionController < ApplicationController
  def new
  end

  def create
    # find the user by email
    user = User.find_by :email => params[:email]
    # if the password matches
    if user.present? && user.authenticate(params[:password])
      # remember the user
      session[:user_id] = user.id
      redirect_to root_path
      # go home
    else
      # redirect_to login (so they can try again)
      # tell them sorry
      flash[:error] = "Sorry, login failed."
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end
end
