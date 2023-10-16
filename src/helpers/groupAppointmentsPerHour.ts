const groupAppointmentsPerHour = (appointments: IAppointment[]) => {
  const getFullHours = (start: number, end: number) => {
    const fullHours = [];
    for (let i = start; i <= end; i++) {
      fullHours.push(`${i}:00`);
    }
    return fullHours;
  };

  const perHourAppointments: { [hour: string]: IAppointment[] } = {};

  appointments.forEach((appointment) => {
    const dateTime = new Date(appointment.dateTime);
    const hour = `${dateTime.getHours()}:00`;

    if (!perHourAppointments[hour]) perHourAppointments[hour] = [];

    perHourAppointments[hour].push(appointment);
  });

  const workingHours = getFullHours(9, 18);
  const groupedAppointments = workingHours.map((hour) => ({
    hour: `${hour.split(":")[0].padStart(2, "0")}:${hour.split(":")[1]}`,
    appointments: perHourAppointments[hour] || [],
  }));

  return groupedAppointments;
};

export default groupAppointmentsPerHour;
