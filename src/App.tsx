import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { MostPopular } from "./components/layout/MostPopular";
import { Creative } from "./components/layout/Creative";
import { Finished } from "./components/layout/Finished";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <MostPopular />
        <Creative />
        <Finished />
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
