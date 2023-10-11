import { NavLink } from "react-router-dom";

type NavItemProps = {
  label: string;
  icon: string;
  path: string;
};

const NavItem = ({ label, icon, path }: NavItemProps) => {
  return (
    <NavLink
      to={path}
      className="flex items-center gap-4 px-3 py-2 text-[1.75rem] text-p3 font-medium cursor-pointer transition-all rounded-2xl hover:bg-c0"
    >
      <img src={icon} />
      {label}
    </NavLink>
  );
};

export default NavItem;
