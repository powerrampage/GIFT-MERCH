import style from "./input.module.scss"

type inputProps = {
  placeholder: string
  type?: string
}

export const Input = ({placeholder, type = "text"}: inputProps) => {
  return (
    <input className={style.input} type={type} placeholder={placeholder}>
    </input>
  )
}