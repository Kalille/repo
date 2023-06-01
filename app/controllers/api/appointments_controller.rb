class Api::AppointmentsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    def index
        render json: Appointment.all, include: [:user]
    end
end
