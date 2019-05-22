var Appointments = createReactClass({
  render: function(){
    return (
      <div>
        <AppointmentForm />
        <AppointmentsList appointments={appointments} />
      </div>
    );
  }
});
