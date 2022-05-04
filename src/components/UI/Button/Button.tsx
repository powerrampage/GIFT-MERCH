import style from "./button.module.scss"

type buttonProps = {
  title: string
  color?: string
  bg?: string
}

export const Button = ({title, color, bg}: buttonProps) => {
  return (
    <>
      <span className={style.button} style={{backgroundColor: bg, color: color}}>{title}</span>
    </>
  )
}