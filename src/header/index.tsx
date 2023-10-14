import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="bg-c0 flex justify-end items-center p-8 gap-5 col-span-full h-[120px]">
      {user ? (
        <>
          <span className="flex justify-center items-center w-[75px] h-[75px] bg-p3 text-c0 text-[3rem] rounded-full">
            {user?.name.charAt(0)}
          </span>
          <button className="font-semibold text-[1.5rem] text-p3 px-12 py-8 rounded-2xl transition-all hover:bg-p1 after:inline-block after:bg-expand-user after:bg-center after:bg-no-repeat after:w-[30px] after:h-[12.5px] after:ml-5">
            {user?.name}
          </button>
        </>
      ) : (
        <p className="font-semibold text-[1.125rem] me-4">
          Sem usuário logado. <br />
          Faça o login!
        </p>
      )}
    </header>
  );
};

export default Header;
