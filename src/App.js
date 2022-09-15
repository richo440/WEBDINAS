import {Routes, Route} from "react-router-dom";
import Beranda from "./Beranda";
import Isiberita from "./pages/Isiberita";
import BeritaFull from './pages/Detailberita';
import Isiartikel from "./pages/Isiartikel";
import ArtikelFull from './pages/Detailartikel';
import Isifoto from "./pages/Isifoto";
import Detailfoto from './pages/Detailfoto';
import Isivideo from "./pages/Isivideo";
import Detailvideo from './pages/Detailvideo';
import Isiprofil from "./pages/Isiprofil";
import Isidokumen from "./pages/Isidokumen";
import Detaildokumen from './pages/Detaildokumen';

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Beranda/>} />
      <Route path="Isiberita" element={<Isiberita/>} />
      <Route path='/BeritaFull/:id' exact element={<BeritaFull />} />
      <Route path='/ArtikelFull/:id' exact element={<ArtikelFull />} />
      <Route path="Isiartikel" element={<Isiartikel/>} />
      <Route path="Isifoto" element={<Isifoto/>} />
      <Route path="/Detailfoto/:slug" element={<Detailfoto/>}/>
      <Route path="Isivideo" element={<Isivideo/>} />
      <Route path="/Detailvideo/:slug" element={<Detailvideo/>}/>
      <Route path="Isiprofil" element={<Isiprofil/>} />
      <Route path="Isidokumen" element={<Isidokumen/>} />
      <Route path="/Detaildokumen/:slug" element={<Detaildokumen/>}/>
    </Routes>
    </> 
  );
}

export default App;