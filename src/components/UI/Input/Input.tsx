import { FC } from "react"
import style from "./input.module.scss"
import { InputProps } from "./input.type"



export const Input: FC<InputProps> = ({placeholder, type = "text", required}: InputProps) => {
  return (
    <input className={style.input} type={type} placeholder={placeholder} required={required}>
    </input>
  )
}