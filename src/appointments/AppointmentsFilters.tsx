import { Dispatch, SetStateAction } from "react";
import Input from "../UI/Input";

type AppointmentsFiltersProps = {
  day: string;
  setDay: Dispatch<SetStateAction<string>>;
};

const AppointmentsFilters = ({ day, setDay }: AppointmentsFiltersProps) => {
  return (
    <form className="flex gap-5 justify-between 2xl:justify-normal mt-8">
      <Input
        id="day"
        label="Dia"
        type="date"
        value={day}
        onChange={({ target }) => setDay(target.value)}
      />
      <Input id="veterinarian" label="Veterinário" />
      <Input id="petOwner" label="Responsável" />
      <Input id="pet" label="Pet" />
    </form>
  );
};

export default AppointmentsFilters;
