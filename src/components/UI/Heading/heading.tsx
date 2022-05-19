import { FC } from "react"
import style from "./heading.module.scss"
import { HeadingProps } from "./heading.type"



export const Heading: FC<HeadingProps> = ({title, text, star}: HeadingProps) => {
  return (
    <div className={style.heading}>
      <h1 className={style.title}>
        {title}
        {star ? <span className={style.star}>{star}</span> : null}
      </h1>
      {text ? <p className={style.text}>{text}</p>: null}
    </div>
  )
}