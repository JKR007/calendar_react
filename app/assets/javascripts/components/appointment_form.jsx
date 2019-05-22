var AppointmentForm = createReactClass({
  render: function(){
    return(
      <div>
        <h2>Make a new appointment</h2>
        <form>
          <input name='title' placeholeder='Appointment' />
          <input name='appointment_time' placeholder='Date and Time' />
          <input type='submit' value='Make Appointment' />
        </form>
      </div>
    );
  }
});