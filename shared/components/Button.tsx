import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  btnType?: "primary" | "secondary" | "no-border";
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  fontStyle?: "opsans";
}

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const Button: React.FC<ButtonProps> = ({
  btnType,
  children,
  className,
  disabled,
  fontStyle,
  ...rest
}) => {
  const getBtnStyle = (type?: "primary" | "secondary" | "no-border") => {
    if (type === "primary") {
      return "!bg-primary !text-white hover:brightness-110";
    }
    if (type === "secondary") {
      return "!bg-white !text-primary border border-primary hover:!bg-primary-hover";
    }
    if (type === "no-border") {
      return "!bg-white !text-primary";
    }
    return "bg-primary text-white ";
  };

  return (
    <button
      type="button"
      {...rest}
      className={`${getBtnStyle(btnType)} ${
        fontStyle === "opsans" && `font-${openSans.style.fontFamily}`
      } rounded-[10px] w-[154px] h-[52px] text-base leading-5 tracking-[4%] font-semibold ${className} `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
