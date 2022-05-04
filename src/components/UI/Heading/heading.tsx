import style from "./heading.module.scss"
import { ReactComponent as Star } from "../../../assets/icons/heading-star.svg";

type HeadingProps = {
  title: string,
  text: string,
  star?: boolean
}

export const Heading = ({title, text, star}: HeadingProps) => {
  return (
    <div className={style.heading}>
      <h1 className={style.title}>
        {title}
        {star ? <span className={style.star}><Star/></span> : null}
      </h1>
      <p className={style.text}>{text}</p>
    </div>
  )
}