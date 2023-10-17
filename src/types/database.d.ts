type IAppointment = {
  id: number;
  veterinarian: string;
  pet: string;
  petOwner: string;
  dateTime: Date;
};

type IUser = {
  email: string;
  name: string;
  role: "ADMIN" | "USER";
};

type IVeterinarian = {
  id: number;
  name: string;
  email: string;
  crmv: string;
  phone: string;
  specialization: Specialization;
  address: {
    street: string;
    district: string;
    cep: string;
    city: string;
    state: string;
    number: string;
    complement: string;
  };
  active: boolean;
};

type Specialization = "CLINICA_GERAL" | "RADIOLOGIA" | "CIRUGIA" | "PATOLOGIA";

type IPetOwner = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  address: {
    street: string;
    district: string;
    cep: string;
    city: string;
    state: string;
    number: string;
    complement: string;
  };
  active: boolean;
};

type IPet = {
  id: number;
  name: string;
  species: "CACHORRO" | "GATO";
  age: number;
  breed: string;
  petOwner: {
    id: number;
    name: string;
    cpf: string;
    email: string;
    address: {
      street: string;
      district: string;
      cep: string;
      city: string;
      state: string;
      number: string;
      complement: string;
    };
    active: boolean;
  };
};
