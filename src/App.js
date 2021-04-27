import React from "react";
import ItemCount from "./components/itemcount/itemcount";

export default function App() {
  return (
    <div className="App">
      <ItemCount stock="5" initial="1"/>
    </div>
  );
}