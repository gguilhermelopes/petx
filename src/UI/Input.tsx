import { ComponentProps } from "react";

type IInput = ComponentProps<"input"> & {
  label: string;
  id: string;
};

const Input = ({ label, id, ...props }: IInput) => {
  return (
    <div className="flex flex-col max-w-[235px] gap-3 text-[1.25rem]">
      <label
        className="bg-[#e8e1ec] px-8 py-4 rounded-2xl font-bold"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="bg-[#e8e1ec] px-8 py-4 rounded-2xl font-ibmPlexMono outline-p2"
        name={id}
        id={id}
        {...props}
      />
    </div>
  );
};

export default Input;
