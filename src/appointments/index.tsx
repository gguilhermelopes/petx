import Button from "../UI/Button";
import InfoCard from "../UI/InfoCard";
import AppointmentsFilters from "./AppointmentsFilters";

const Appointments = () => {
  return (
    <div className="col-start-2 p-12">
      <div className="flex gap-16 items-center justify-between 2xl:justify-normal">
        <h1 className="font-bold text-[2.25rem]">Consultas</h1>
        <Button variation="PRIMARY">Adicionar consulta</Button>
      </div>
      <AppointmentsFilters />
      <div className="flex gap-6 mt-14">
        <InfoCard title="Consultas hoje" info="16" />
        <InfoCard title="Veterinário destaque" info="Dr. João Carlos" />
      </div>
    </div>
  );
};

export default Appointments;
