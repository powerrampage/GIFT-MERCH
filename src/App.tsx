import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { MostPopular } from "./components/layout/MostPopular";
import { Creative } from "./components/layout/Creative";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <MostPopular />
        <Creative />
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
