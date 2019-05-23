var AppointmentsList = createReactClass({
  render: function() {
    return(
      <div>
        {this.props.appointments.map(function(appointment) {
          return (
            <div key={appointment.id}>
              <Appointment appointment={appointment} />
            </div>
          )
        })}
      </div>
    )
  }
});