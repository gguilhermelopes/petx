import Logo from "./Logo";
import Nav from "./Nav";

const Sidebar = () => {
  return (
    <div className="absolute top-0 m-9 p-9 bg-p1 rounded-[20px] min-w-[360px]">
      <Logo />
      <Nav />
    </div>
  );
};

export default Sidebar;
