import React from "react";
import { Button, ButtonProps } from "./components/Button";

const buttonProps: ButtonProps[] = [
  { color: "green", variant: "outline" },
  { color: "red", variant: "outline" },
  { color: "green", variant: "filled" },
  { color: "red", variant: "filled" },
];

export const App = () => {
  return (
    <>
      {buttonProps.map((props) => (
        <Button {...props}>Click me</Button>
      ))}
    </>
  );
};
