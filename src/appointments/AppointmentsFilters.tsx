import Input from "../UI/Input";

const AppointmentsFilters = () => {
  return (
    <form className="flex gap-5 justify-between 2xl:justify-normal mt-8">
      <Input id="day" label="Dia" type="date" />
      <Input id="veterinarian" label="Veterinário" />
      <Input id="petOwner" label="Responsável" />
      <Input id="pet" label="Pet" />
    </form>
  );
};

export default AppointmentsFilters;
