import { useState } from "react";
import Input from "../UI/Input";
import Select from "../UI/Select";
import getFullHours from "../helpers/getFullHours";
import Button from "../UI/Button";
import useGetFetch from "../hooks/useGetFetch";

const CreateAppointmentModal = () => {
  const [veterinarianId, setVeterinarianId] = useState<string | number>(
    "Selecione o Veterinário"
  );
  const [petOwnerId, setPetOwnerId] = useState<string | number>(
    "Selecione o Responsável"
  );
  const [petId, setPetId] = useState<string | number>("Selecione o Pet");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("Selecione o Horário");

  const { data: veterinariansData, loading: veterinariansLoading } =
    useGetFetch<IVeterinarian[]>("veterinarians");
  const { data: petOwnersData, loading: petOwnersLoading } =
    useGetFetch<IPetOwner[]>("pet_owners");
  const { data: petData, loading: petLoading } = useGetFetch<IPet[]>("pets");

  const filteredPets = petData?.filter((pet) => pet.petOwner.id === petOwnerId);
  const workingHours = getFullHours(9, 18).map(
    (hour) => `${hour.split(":")[0].padStart(2, "0")}:${hour.split(":")[1]}`
  );

  return (
    <div className="px-20 py-16 bg-p1 rounded-2xl">
      <h1 className="font-bold text-[2rem]">Criar nova consulta</h1>
      <form
        className="flex gap-5 mt-5"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="flex flex-col gap-5">
          {veterinariansData && (
            <Select<IVeterinarian>
              id="veterinarian"
              label="Veterinário"
              options={veterinariansData}
              value={veterinarianId}
              onChange={({ target }) =>
                setVeterinarianId(parseInt(target.value))
              }
            />
          )}
          {petOwnersData && (
            <Select<IPetOwner>
              id="petOwner"
              label="Responsável"
              options={petOwnersData}
              value={petOwnerId}
              onChange={({ target }) => setPetOwnerId(parseInt(target.value))}
            />
          )}

          {filteredPets && typeof petOwnerId === "number" && (
            <Select<IPet>
              id="petOwner"
              label="Pet"
              options={filteredPets}
              value={petId}
              onChange={({ target }) => setPetId(target.value)}
            />
          )}
        </div>
        <div className="flex flex-col justify-center gap-5">
          <Input
            id="dateTime"
            label="Data"
            type="date"
            value={day}
            onChange={({ target }) => setDay(target.value)}
          />
          <div className="flex flex-col gap-3 text-[1rem]">
            <label
              className="bg-[#e8e1ec] px-8 py-4 rounded-2xl font-bold"
              htmlFor="hour"
            >
              Horário
            </label>
            <select
              className="bg-[#e8e1ec] px-8 py-4 rounded-2xl font-ibmPlexMono outline-p2"
              id="hour"
              value={hour}
              onChange={({ target }) => setHour(target.value)}
            >
              <option disabled>Selecione o Horário</option>
              {workingHours.map((hour) => (
                <option>{hour}</option>
              ))}
            </select>
          </div>
          <Button variation="PRIMARY">Criar consulta</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateAppointmentModal;
