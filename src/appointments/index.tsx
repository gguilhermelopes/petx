import { useState } from "react";
import Button from "../UI/Button";
import InfoCard from "../UI/InfoCard";
import groupAppointmentsPerHour from "../helpers/GroupAppointmentsPerHour";
import useFetch from "../hooks/useFetch";
import AppointmentsFilters from "./AppointmentsFilters";

const formatDate = (date: Date) => {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
};

const Appointments = () => {
  const [day, setDay] = useState(formatDate(new Date()));
  const { data } = useFetch<IAppointment[]>("GET", "appointments");
  if (!data) return <p>No appointments today.</p>;

  const appointmentsByDay = (date: string) => {
    return data.filter((item) => formatDate(new Date(item.dateTime)) === date);
  };

  const groupedData = groupAppointmentsPerHour(appointmentsByDay(day));

  return (
    <div className="col-start-2 p-12">
      <div className="flex gap-16 items-center justify-between 2xl:justify-normal">
        <h1 className="font-bold text-[2.25rem]">Consultas</h1>
        <Button variation="PRIMARY">Adicionar consulta</Button>
      </div>
      <AppointmentsFilters day={day} setDay={setDay} />
      <div className="flex gap-6 mt-14">
        <InfoCard title="Consultas hoje" info="16" />
        <InfoCard title="Veterinário destaque" info="Dr. João Carlos" />
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
