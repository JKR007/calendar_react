var AppointmentForm = createReactClass({
  handleChange: function(e){
    // 'e' is the event
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  render: function() {
    return(
      <div>
        <h2>Make a new appointment</h2>
        <form>
          <input name='title' placeholeder='Appointment' 
            value={this.props.input_title} 
            onChange={this.handleChange}
          />
          <input name='appointment_time' placeholder='Date and Time' 
            value={this.props.input_appointment_time} 
            onChange={this.handleChange}
          />
          <input type='submit' value='Make Appointment' />
        </form>
      </div>
    )
  }
});