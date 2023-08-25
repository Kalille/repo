class Api::AppointmentsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    def index
        render json: Appointment.all, include: [:user]
    end

    def show
        appointment = Appointment.find_by(id: params[:id])

        render json: appointment
    end
end
