import React, { ReactElement } from "react";
import { Button, ButtonProps } from "./components/Button";
import { TextInput } from "./components/TextInput";
import { Toast } from "./components/Toast";
import { CircleIcon } from "./icons/Icons";

const generateButtons = (): ReactElement[] => {
  const colors: ButtonProps["color"][] = ["green", "red"];
  const variants: ButtonProps["variant"][] = ["outlined", "filled"];
  const icons: ButtonProps["icon"][] = [undefined, <CircleIcon />];
  const result: ReactElement[] = [];
  colors.forEach((color) =>
    variants.forEach((variant) =>
      icons.forEach((icon) =>
        result.push(
          <Button
            key={`${color}-${variant}${icon ? "-icon" : ""}`}
            text="Click me"
            color={color}
            variant={variant}
            icon={icon}
          />
        )
      )
    )
  );
  return result;
};
const buttons = generateButtons();

export const App = () => {
  return (
    <>
      {buttons}
      <TextInput className="w-64" />
      <TextInput icon={<CircleIcon />} className="w-64" />
      <Toast message="example message" color="green" />
      <Toast
        message="extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message"
        color="red"
      />
    </>
  );
};
