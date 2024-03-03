import { useState } from "react";
import Cards from "../Cards/Cards";
import Korzina from "../Korzina/Korzina";
import "./App.css";
import {arrOfKorzina} from "../../Data/BestOf";
import countOfKorzinaCard from "../../utils/countOfKorzinaCard";
import Navbar from "../Navbar/Navbar";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import korzinaRestart from "../../utils/korzinaRestart";

const App = () => {
  const [korzina, setKorzina] = useState(arrOfKorzina)
  console.log(korzina)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards countF={countOfKorzinaCard} setKorzina={setKorzina} korzina={korzina} />} />
        <Route path="/korzina" element={<Korzina arr={korzina} setArr={setKorzina} korzinaRestart={korzinaRestart} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App