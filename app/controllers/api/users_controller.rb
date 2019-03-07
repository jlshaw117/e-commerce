class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            render json: 'success'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])

        if @user
            render json: @user
        else
            render json: ["Unautherized access"], status: 401
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :f_name, :l_name, :password)
    end
end
