import { useState } from "react";

import Button from "../UI/Button";
import InfoCard from "../UI/InfoCard";
import AppointmentsFilters from "./AppointmentsFilters";
import formatDate from "../helpers/formatDate";
import findVetWithMostAppointments from "../helpers/findVetWithMostAppointments";
import groupAppointmentsPerHour from "../helpers/groupAppointmentsPerHour";
import ModalContainer from "../UI/ModalContainer";
import CreateAppointmentModal from "./CreateAppointmentModal";
import useGetFetch from "../hooks/useGetFetch";

const Appointments = () => {
  const [day, setDay] = useState(formatDate(new Date("2023-11-16")));
  const [isModalOn, setIsModalOn] = useState(false);
  const { data } = useGetFetch<IAppointment[]>("appointments");

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
    <>
      {isModalOn && (
        <ModalContainer setModal={setIsModalOn} direction="center">
          <CreateAppointmentModal />
        </ModalContainer>
      )}
      <div className="col-start-2 p-12">
        <div className="flex gap-16 items-center justify-between 2xl:justify-normal">
          <h1 className="font-bold text-[2.25rem]">Consultas</h1>
          <Button onClick={() => setIsModalOn(true)} variation="PRIMARY">
            Adicionar consulta
          </Button>
        </div>
        <AppointmentsFilters day={day} setDay={setDay} />
        <div className="flex gap-6 mt-14">
          <InfoCard title="Consultas do dia" info={numberOfAppointments} />
          <InfoCard
            title="Veterinário destaque"
            info={
              mostAppointmentsVet
                ? `Dr.(a) ${mostAppointmentsVet}`
                : "Sem consultas no dia"
            }
          />
        </div>
        <ul className="mt-14 text-[1.125rem] text-p3 flex flex-col gap-8 justify-center">
          {groupedData.map((item) => (
            <li key={item.hour} className="flex gap-5">
              <span className="font-bold p-2 bg-c1 rounded-xl">
                {item.hour}
              </span>
              <ul className="text-[1.125rem] flex gap-4">
                {item.appointments.length ? (
                  item.appointments.map((appointment) => (
                    <li
                      className="bg-c0 p-2 rounded-xl flex gap-6"
                      key={appointment.id}
                    >
                      <span className="text-p2 font-bold">
                        {appointment.pet}
                      </span>{" "}
                      <span>{appointment.petOwner}</span>{" "}
                      <span className="font-ibmPlexMono">
                        Dr.(a) {appointment.veterinarian}
                      </span>
                    </li>
                  ))
                ) : (
                  <p className="bg-c0 p-2 rounded-xl flex gap-6">
                    Horário livre
                  </p>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Appointments;
