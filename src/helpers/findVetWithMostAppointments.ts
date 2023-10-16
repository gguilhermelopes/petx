const findVetWithMostAppointments = (appointments: IAppointment[]) => {
  const appointmentsByVet: { [key: string]: number } = {};

  appointments.forEach((appointment) => {
    if (appointmentsByVet[appointment.veterinarian]) {
      appointmentsByVet[appointment.veterinarian]++;
    } else appointmentsByVet[appointment.veterinarian] = 1;
  });

  console.log(appointments);

  let mostAppointments = 0;
  let mostAppointmentsVet = null;
  for (const vet in appointmentsByVet) {
    if (appointmentsByVet[vet] > mostAppointments) {
      mostAppointments = appointmentsByVet[vet];
      mostAppointmentsVet = vet;
    }
  }
  return mostAppointmentsVet;
};

export default findVetWithMostAppointments;
