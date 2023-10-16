import { useState } from "react";

import Button from "../UI/Button";
import InfoCard from "../UI/InfoCard";
import groupAppointmentsPerHour from "../helpers/GroupAppointmentsPerHour";
import useFetch from "../hooks/useFetch";
import AppointmentsFilters from "./AppointmentsFilters";
import formatDate from "../helpers/formatDate";
import findVetWithMostAppointments from "../helpers/findVetWithmostAppointments";

const Appointments = () => {
  const [day, setDay] = useState(formatDate(new Date("2023-11-16")));
  const { data } = useFetch<IAppointment[]>("GET", "appointments");

  if (!data) return;

  const appointmentsByDay = (date: string) => {
    return data.filter((item) => formatDate(new Date(item.dateTime)) === date);
  };

  const mostAppointmentsVet = findVetWithMostAppointments(
    appointmentsByDay(day)
  );

  const groupedData = groupAppointmentsPerHour(appointmentsByDay(day));

  const numberOfAppointments = groupedData
    .reduce((a, b) => a + b.appointments.length, 0)
    .toString();

  return (
    <div className="col-start-2 p-12">
      <div className="flex gap-16 items-center justify-between 2xl:justify-normal">
        <h1 className="font-bold text-[2.25rem]">Consultas</h1>
        <Button variation="PRIMARY">Adicionar consulta</Button>
      </div>
      <AppointmentsFilters day={day} setDay={setDay} />
      <div className="flex gap-6 mt-14">
        <InfoCard title="Consultas hoje" info={numberOfAppointments} />
        <InfoCard
          title="Veterinário destaque"
          info={
            mostAppointmentsVet
              ? `Dr.(a) ${mostAppointmentsVet}`
              : "Sem consultas hoje"
          }
        />
      </div>
      <ul>
        {groupedData.map((item) => (
          <li key={item.hour} className="flex">
            <span>{item.hour}</span>
            <ul>
              {item.appointments.map((appointment) => (
                <li key={appointment.id}>{appointment.pet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
