import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Header / Footer
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
// Pages
import { Main } from "./pages/Main";
import { Sewing } from "./pages/Sewing";
import { Internal } from "./pages/Internal";
import { Goods } from "./pages/Goods";
import { Sets } from "./pages/Sets";
import { Information } from "./pages/Information";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sewing" element={<Sewing />} />
        <Route path="/sewing/internal" element={<Internal />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/information" element={<Information />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
