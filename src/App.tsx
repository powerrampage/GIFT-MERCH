import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
// Header / Footer
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
// Pages
import { Main } from "./pages/Main";
import { Sewing } from "./pages/Sewing";
import { Internal } from "./pages/Internal";
import { Goods } from "./pages/Goods";
import { Sets } from "./pages/Sets";
import { Production } from "./pages/Production";
import { Information } from "./pages/Information";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sewing" element={<Sewing />} />
        <Route path="/sewing/internal" element={<Internal />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/production" element={<Production />} />
        <Route path="/information" element={<Information />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
