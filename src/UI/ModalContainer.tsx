import { Dispatch, SetStateAction, MouseEvent, ComponentProps } from "react";

type ModalContainerProps = ComponentProps<"div"> & {
  setModal: Dispatch<SetStateAction<boolean>>;
  direction: "end" | "center";
};

const ModalContainer = ({
  children,
  setModal,
  direction,
}: ModalContainerProps) => {
  const handleOutsideModalClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) setModal(false);
  };

  return (
    <div
      onClick={handleOutsideModalClick}
      style={{ justifyContent: direction, alignItems: direction }}
      className="flex px-10 bg-[#000] bg-opacity-40 z-10 fixed h-screen w-full"
    >
      {children}
    </div>
  );
};

export default ModalContainer;
