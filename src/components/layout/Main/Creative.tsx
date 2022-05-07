import logo from "../../../assets/images/Main/creative/creative-logo.png";
import photoImage from "../../../assets/images/Main/creative/photo.png";
import { Button } from "../../UI/Button/Button";
import { Heading } from "../../UI/Heading/heading";
import "../../../assets/styles/layout/main/creative.scss"


export const Creative = () => {
  return (
    <section className="main__creative creative">
      <div className="creative__container">
        <div className="creative__inner">
          <div className="creative__left left-creative">
            <div className="creative__logo">
              <img loading="lazy" decoding="async" src={logo} width="302" height="87" alt="creative logo" />
            </div>
            <Heading title="Хотите удивить ваших коллег/партнеров необычными подарками?" text="Выбирайте готовые подарочные наборы или укажите критерии по которым мы соберем для Вас уникальный бокс." />
            <div className="creative__buttons">
              <Button title="Перейти к наборам" bg="#272525" />
              <Button title="Создать свой" bg="#EEF1F6" color="#272525" />
            </div>
          </div>
          <div className="creative__right right-creative">
            <img loading="lazy" decoding="async" src={photoImage} width="695.72" height="619.72" alt="Dont't touch my Lunch" />
          </div>
        </div>
      </div>
    </section>
  )
}