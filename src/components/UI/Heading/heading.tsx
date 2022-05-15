import style from "./heading.module.scss"

type HeadingProps = {
  title: string,
  text?: string,
  star?: React.ReactElement
}

export const Heading = ({title, text, star}: HeadingProps) => {
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