import React from "react";
import { Button } from "./components/Button";

export const App = () => {
  return (
    <>
      <Button onClick={() => alert("Thanks!")}>Press me</Button>
      <Button>Press me please</Button>
    </>
  );
};
