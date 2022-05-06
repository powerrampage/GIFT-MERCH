import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { MostPopular } from "./components/layout/MostPopular";
import { Creative } from "./components/layout/Creative";
import { Finished } from "./components/layout/Finished";
import { Idea } from "./components/layout/Idea";
import { Cooperates } from "./components/layout/Cooperates";
import { Footer } from "./components/layout/Footer";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <MostPopular />
        <Creative />
        <Finished />
        <Idea />
        <Cooperates />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
