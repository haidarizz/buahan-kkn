import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Map from "./pages/Map";
import Wisata from "./pages/Wisata";
import Aktivitas from "./pages/Aktivitas";
import Guide from "./pages/Guide";

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
      </Routes>
    </Router>
  );
}

export default App;
