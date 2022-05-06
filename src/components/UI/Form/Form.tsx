import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import style from "./form.module.scss"

type FormProps = {
  direction: "column" | "row"
}
export const Form = ({ direction = "row" }: FormProps) => {
  return (
    <form className={style.form +`${direction === "column" ? ` ${style.active}` : ""}`}>
      <div className={style.inputs +`${direction === "column" ? ` ${style.active}` : ""}`}>
        <Input placeholder="Ваше Имя" required={true} />
        <Input placeholder="Ваша електронная почта" type="email" required={true} />
        <Input placeholder="Ваш номер телефона" type="number" required={true} />
      </div>
      <button type="submit">
        <Button title="Заказать" />
      </button>
    </form>
  )
}