const groupAppointmentsPerHour = (appointments: IAppointment[]) => {
  const getFullHours = (start: number, end: number) => {
    const fullHours = [];
    for (let i = start; i <= end; i++) {
      fullHours.push(`${i.toString().padStart(2, "0")}:00:00`);
    }
    return fullHours;
  };

  const perHourAppointments: { [hour: string]: IAppointment[] } = {};

  appointments.forEach((appointment) => {
    const dateTime = new Date(appointment.dateTime);
    const hour = `${dateTime.getHours()}:00:00`;

    if (!perHourAppointments[hour]) perHourAppointments[hour] = [];

    perHourAppointments[hour].push(appointment);
  });

  const workingHours = getFullHours(9, 18);
  const groupedAppointments = workingHours.map((hour) => ({
    hour,
    appointments: perHourAppointments[hour] || [],
  }));

  return groupedAppointments;
};

export default groupAppointmentsPerHour;
