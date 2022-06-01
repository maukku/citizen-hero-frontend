import { useState } from "react";
import Representative from "./components/RepresentativeItem";
function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1 className="header">Citizen Hero</h1>
        <Representative />
      </section>
    </div>
  );
}

export default App;
