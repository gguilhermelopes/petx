import getFullHours from "./getFullHours";

const groupAppointmentsPerHour = (appointments: IAppointment[]) => {
  const workingHours = getFullHours(9, 18);
  const perHourAppointments: { [hour: string]: IAppointment[] } = {};

  appointments.forEach((appointment) => {
    const dateTime = new Date(appointment.dateTime);
    const hour = `${dateTime.getHours()}:00`;

    if (!perHourAppointments[hour]) perHourAppointments[hour] = [];

    perHourAppointments[hour].push(appointment);
  });

  const groupedAppointments = workingHours.map((hour) => ({
    hour: `${hour.split(":")[0].padStart(2, "0")}:${hour.split(":")[1]}`,
    appointments: perHourAppointments[hour] || [],
  }));

  return groupedAppointments;
};

export default groupAppointmentsPerHour;
