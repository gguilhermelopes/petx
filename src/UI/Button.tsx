import { ComponentProps } from "react";

type IButton = ComponentProps<"button"> & {
  variation: "PRIMARY" | "OUTLINE" | "DANGER";
};

const Button = ({ children, variation, ...props }: IButton) => {
  const getBackgroundColor = (variation: "PRIMARY" | "OUTLINE" | "DANGER") => {
    switch (variation) {
      case "PRIMARY":
        return "#621887";
      case "OUTLINE":
        return "#e8e1ec";
      case "DANGER":
        return "#b32404";
      default:
        return "transparent";
    }
  };

  const buttonStyle = {
    backgroundColor: getBackgroundColor(variation),
    color: variation === "OUTLINE" ? "#1c0229" : "#ffffff",
  };
  return (
    <button
      style={buttonStyle}
      className="px-14 py-4 rounded-2xl font-bold text-[1.5rem] outline-none transition-all hover:opacity-80"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;