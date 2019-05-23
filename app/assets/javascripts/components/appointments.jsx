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

  handleFormSubmit: function() {
    var appointment = { title: this.state.title, appointment_time: this.state.appointment_time }
    $.post('/appointments', {appointment: appointment} )
    .done(function(data){
      this.addNewAppointment(data)
    }.bind(this));
  },

  addNewAppointment: function(appointment) {
    var appointments = React.addons.update(this.state.appointments, { $push: [appointment] });
    this.setState({ appointments: appointments });
    this.setState({
      appointments: appointments.sort(function(a,b){
        return new Date(a.appointment_time) - new Date(b.appointment_time)
      })
    });
  },

  render: function(){
    return (
      <div>
        <AppointmentForm 
          title={this.state.title} 
          appointment_time={this.state.appointment_time} 
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit}
        />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    );
  }
});
