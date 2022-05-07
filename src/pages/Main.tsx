import { MostPopular } from "../components/layout/Main/MostPopular";
import { Creative } from "../components/layout/Main/Creative";
import { Finished } from "../components/layout/Main/Finished";
import { Idea } from "../components/layout/Idea";
import { Cooperates } from "../components/layout/Main/Cooperates";
import '../assets/styles/layout/main.scss'

export const Main = () => {
  return (
    <main className="main">
      <MostPopular />
      <Creative />
      <Finished />
      <Idea />
      <Cooperates />
    </main>
  )
}
