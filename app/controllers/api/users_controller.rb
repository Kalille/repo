class Api::UsersController < ApplicationController
    skip_before_action :authorize, only: [:show, :create, :index]
    def index
       render json: User.all, include: [:appointments]
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
        user = User.find_by(id: params[:id])
       render json: user, include: [:appointments]
      end

      private
  
      def user_params
        params.permit(:name,:contact,:address, :email, :password, :password_confirmation)
      end
end
