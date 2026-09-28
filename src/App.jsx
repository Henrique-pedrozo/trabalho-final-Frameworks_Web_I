import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import SeachedPokemon from "./pages/SeachedPokemon";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/:pokemon"} element={<SeachedPokemon />} />
      </Routes>
    </div>
  )
}

export default App