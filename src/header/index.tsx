const Header = () => {
  return (
    <header className="bg-c0 flex justify-end p-8 gap-5">
      <span className="flex justify-center items-center w-[75px] h-[75px] bg-p3 text-c0 text-[3rem] rounded-full">
        G
      </span>
      <button className="font-semibold text-[1.5rem] text-p3 px-4 rounded-2xl transition-all hover:bg-p1 after:inline-block after:bg-expand-user after:bg-center after:bg-no-repeat after:w-[30px] after:h-[12.5px] after:ml-5">
        Guilherme Lopes
      </button>
    </header>
  );
};

export default Header;
