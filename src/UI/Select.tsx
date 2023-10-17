import { ComponentProps } from "react";

type ISelect<T> = ComponentProps<"select"> & {
  label: string;
  id: string;
  options: T[];
};

function Select<T extends { name: string; id: number }>({
  label,
  id,
  options,
  ...props
}: ISelect<T>) {
  return (
    <div className="flex flex-col gap-3 text-[1rem]">
      <label
        className="bg-[#e8e1ec] px-8 py-4 rounded-2xl font-bold"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className="bg-[#e8e1ec] px-8 py-4 rounded-2xl font-ibmPlexMono outline-p2"
        id={id}
        {...props}
      >
        <option disabled>Selecione o {label}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
