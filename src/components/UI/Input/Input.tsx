import style from "./input.module.scss"

type inputProps = {
  placeholder: string
  type?: string
  required?: boolean
}

export const Input = ({placeholder, type = "text", required}: inputProps) => {
  return (
    <input className={style.input} type={type} placeholder={placeholder} required={required}>
    </input>
  )
}