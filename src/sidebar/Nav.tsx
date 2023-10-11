import consultasIcon from "../assets/consultas-icon.svg";
import petIcon from "../assets/pet-icon.svg";
import vetIcon from "../assets/vet-icon.svg";
import petOwnerIcon from "../assets/responsavel-icon.svg";
import userIcon from "../assets/usuario-icon.svg";
import contactIcon from "../assets/contato-icon.svg";

import NavItem from "./NavItem";

const navData = [
  {
    label: "Consultas",
    icon: consultasIcon,
  },
  {
    label: "Pets",
    icon: petIcon,
  },
  {
    label: "Veterinários",
    icon: vetIcon,
  },
  {
    label: "Responsáveis",
    icon: petOwnerIcon,
  },
  {
    label: "Usuários",
    icon: userIcon,
  },
  {
    label: "Contato",
    icon: contactIcon,
  },
];

const Nav = () => {
  return (
    <div className="flex flex-col gap-7">
      {navData.map((item) => (
        <NavItem key={item.label} label={item.label} icon={item.icon} />
      ))}
    </div>
  );
};

export default Nav;
