import appointmentsIcon from "../assets/consultas-icon.svg";
import petIcon from "../assets/pet-icon.svg";
import vetIcon from "../assets/vet-icon.svg";
import petOwnerIcon from "../assets/responsavel-icon.svg";
import userIcon from "../assets/usuario-icon.svg";
import contactIcon from "../assets/contato-icon.svg";

import NavItem from "./NavItem";

const navData = [
  {
    label: "Consultas",
    icon: appointmentsIcon,
    path: "/consultas",
  },
  {
    label: "Pets",
    icon: petIcon,
    path: "/pets",
  },
  {
    label: "Veterinários",
    icon: vetIcon,
    path: "/veterinarios",
  },
  {
    label: "Responsáveis",
    icon: petOwnerIcon,
    path: "/responsaveis",
  },
  {
    label: "Usuários",
    icon: userIcon,
    path: "/usuarios",
  },
  {
    label: "Contato",
    icon: contactIcon,
    path: "/contato",
  },
];

const Nav = () => {
  return (
    <div className="flex flex-col gap-7">
      {navData.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          path={item.path}
        />
      ))}
    </div>
  );
};

export default Nav;
