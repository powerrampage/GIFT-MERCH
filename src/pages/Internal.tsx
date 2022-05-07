import { Idea } from "../components/layout/Idea";
import '../assets/styles/layout/internal.scss'
import { Preview } from "../components/layout/Internal/Preview";

export const Internal = () => {
  return (
    <main className="internal">
      <Preview />
      <Idea />
    </main>
  )
}