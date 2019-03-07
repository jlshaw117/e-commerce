class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user
            login(@user)

            render json: 'logged in', status: 200
        else
            render json: ['Invalid credentials'], status: 401
        end
    end

    def destroy
        if logged_in?
            logout
            render json: 'logged out', status: 200
        else
            render json: 'No one is logged in', status: 404
        end
    end

end
