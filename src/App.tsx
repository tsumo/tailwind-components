import React from "react";
import { Button } from "./components/Button";

export const App = () => {
  return (
    <>
      <Button color="red" onClick={() => alert("Oh no!")}>
        Don't click me!
      </Button>
      <Button color="green">Nothing</Button>
    </>
  );
};
