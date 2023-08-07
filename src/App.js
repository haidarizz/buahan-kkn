import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Map from "./pages/Map";
import Wisata from "./pages/Wisata";
import Aktivitas from "./pages/Aktivitas";
import Guide from "./pages/Guide";
import Wisatasawah from "./pages/Wisatasawah";
import Wisataterjun from "./pages/Wisataterjun";
import Wisatabudaya from "./pages/Wisatabudaya";
import Wisatalandscape from "./pages/Wisatalandscape";
import Piuning from "./pages/Piuning";
import Ngaben from "./pages/Ngaben";
import Pesrak from "./pages/Pesrak";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profil" element={<Profil/>}/>
        <Route path="/peta" element={<Map/>}/>
        <Route path="/wisata" element={<Wisata/>}/>
        <Route path="/kegiatan" element={<Aktivitas/>}/>
        <Route path="/petunjuk" element={<Guide/>}/>
        <Route path="/agrowisata" element={<Wisatasawah/>}/>
        <Route path="/airterjun" element={<Wisataterjun/>}/>
        <Route path="/budaya" element={<Wisatabudaya/>}/>
        <Route path="/landscape" element={<Wisatalandscape/>}/>
        <Route path="/matur-piuning" element={<Piuning/>}/>
        <Route path="/ngaben" element={<Ngaben/>}/>
        <Route path="/pesta-rakyat" element={<Pesrak/>}/>
      </Routes>
    </Router>
  );
}

export default App;
