import { Dispatch, SetStateAction, MouseEvent } from "react";

import Button from "../UI/Button";

type UserModalProps = {
  user: IUser | undefined;
  setModal: Dispatch<SetStateAction<boolean>>;
  logout: () => void;
};

const UserModal = ({ user, setModal, logout }: UserModalProps) => {
  const handleOutsideModalClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) setModal(false);
  };

  const handleLogoutClick = () => {
    logout();
    setModal(false);
  };

  return (
    <div
      onClick={handleOutsideModalClick}
      className="flex justify-end px-10 bg-[#000] bg-opacity-40 z-10 absolute h-screen w-full"
    >
      <div className="bg-p1 flex flex-col rounded-2xl py-6 px-12 self-start mt-36 font-bold text-[1.25rem]">
        <div className="flex flex-col items-end py-6 px-12 gap-2 bg-c0 rounded-xl">
          <p>{user?.email}</p>
          <p>{user?.role === "ADMIN" ? "ADMIN ⚙️" : "USER 💻"}</p>
        </div>
        <Button
          variation="PRIMARY"
          style={{ textTransform: "uppercase", marginTop: "2.5rem" }}
          onClick={handleLogoutClick}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserModal;
