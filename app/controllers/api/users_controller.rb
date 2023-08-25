class Api::UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    def index
       render json: User.all 
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
      end

      def adminUsers
        if @current_user.isAdmin?

          render json: User.all
        end
      end

      def show
       render json: @current_user
      end

      private
  
      def user_params
        params.permit(:name,:contact,:address, :email, :password, :password_confirmation)
      end
end
