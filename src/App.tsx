import React from "react";
import { Button } from "./components/Button";

export const App = () => {
  return (
    <>
      <Button variant="red" onClick={() => alert("Oh no!")}>
        Don't click me!
      </Button>
      <Button variant="green">Nothing</Button>
    </>
  );
};
