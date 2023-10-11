type NavItemProps = {
  label: string;
  icon: string;
};

const NavItem = ({ label, icon }: NavItemProps) => {
  return (
    <a className="flex items-center gap-4 px-3 py-2 text-[1.75rem] text-p3 font-medium cursor-pointer transition-all rounded-2xl hover:bg-c0">
      <img src={icon} />
      {label}
    </a>
  );
};

export default NavItem;
