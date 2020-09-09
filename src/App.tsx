import React from "react";
import { Button, ButtonProps } from "./components/Button";
import { Toast } from "./components/Toast";
import { CircleIcon } from "./icons/Icons";

const buttonProps: ButtonProps[] = [
  { text: "Click me", color: "green", variant: "outlined" },
  {
    text: "Click me",
    color: "green",
    variant: "outlined",
    icon: <CircleIcon />,
  },
  { text: "Click me", color: "red", variant: "outlined" },
  {
    text: "Click me",
    color: "red",
    variant: "outlined",
    icon: <CircleIcon />,
  },
  { text: "Click me", color: "green", variant: "filled" },
  {
    text: "Click me",
    color: "green",
    variant: "filled",
    icon: <CircleIcon />,
  },
  { text: "Click me", color: "red", variant: "filled" },
  {
    text: "Click me",
    color: "red",
    variant: "filled",
    icon: <CircleIcon />,
  },
];

export const App = () => {
  return (
    <>
      {buttonProps.map((props, i) => (
        <Button key={i} {...props} />
      ))}
      <Toast message="example message" color="green" />
      <Toast
        message="extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message"
        color="red"
      />
    </>
  );
};
