import React, { ReactElement } from "react";
import clsx from "clsx";
import { Childfree } from "../utils";

type InputHTMLProps = Omit<
  Childfree<React.InputHTMLAttributes<HTMLInputElement>>,
  "type"
>;

type TextInputProps = {
  icon?: ReactElement;
} & InputHTMLProps;

export const TextInput = ({
  icon,
  className,
  ...otherProps
}: TextInputProps) => (
  <div className={clsx(className, "relative")}>
    <input
      type="text"
      className={clsx("inp", icon && "inp-icon")}
      {...otherProps}
    />
    {icon}
  </div>
);
