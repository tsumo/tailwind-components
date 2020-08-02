import React from "react";
import { User } from "./User";
import { Product } from "./Product";
import { Button } from "./Button";

function App() {
  return (
    <>
      <User />
      <Product />
      <Button onClick={() => alert("Thanks!")}>Press me</Button>
      <Button>Press me please</Button>
    </>
  );
}

export default App;
