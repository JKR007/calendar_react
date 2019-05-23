var Appointments = createReactClass({
  getInitialState: function() {
    return({
      appointments: this.props.appointments,
      title: 'Input Title of the Appointment',
      appointment_time: 'Input the the time of the Appointment'
    })
  },

  handleUserInput: function(obj) {
    this.setState(obj)
  },

  render: function(){
    return (
      <div>
        <AppointmentForm 
          input_title={this.state.input_title} 
          input_appointment_time={this.state.input_appointment_time} 
          onUserInput={this.handleUserInput}
        />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    );
  }
});
