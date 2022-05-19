import { FC } from "react"
import style from "./button.module.scss"
import { ButtonProps } from "./button.type"


export const Button: FC<ButtonProps> = ({title, color, bg}: ButtonProps) => {
  return (
    <>
      <span className={style.button} style={{backgroundColor: bg, color: color}}>{title}</span>
    </>
  )
}