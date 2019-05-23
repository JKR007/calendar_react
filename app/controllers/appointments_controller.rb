class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order(appointment_time: :ASC)
    @appointment = Appointment.new
  end

  def create
    @appointment = Appointment.create(appointment_params)

    # we need to send latest set of Records in our response from
    # the action
    # @appointments = Appointment.order(appointment_time: :ASC)
    redirect_to :root
  end

  private

  def appointment_params
    params.require(:appointment).permit(:title, :appointment_time)
  end
end
