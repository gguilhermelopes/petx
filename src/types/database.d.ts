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
