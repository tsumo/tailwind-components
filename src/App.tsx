import React from "react";
import { Button, ButtonProps } from "./components/Button";
import { Toast } from "./components/Toast";

const buttonProps: ButtonProps[] = [
  { color: "green", variant: "outline" },
  { color: "red", variant: "outline" },
  { color: "green", variant: "filled" },
  { color: "red", variant: "filled" },
];

export const App = () => {
  return (
    <>
      {buttonProps.map((props, i) => (
        <Button key={i} {...props}>
          Click me
        </Button>
      ))}
      <Toast message="example message" color="green" />
      <Toast
        message="extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message extra long message"
        color="red"
      />
    </>
  );
};
