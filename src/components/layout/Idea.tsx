import { FC } from "react"
import { Form } from "../UI/Form/Form"
import { Heading } from "../UI/Heading/heading"
import "../../assets/styles/layout/idea.scss"

export const Idea: FC = () => {
  return (
    <section className="main__idea idea">
      <div className="idea__container">
        <div className="idea__inner">
          <div className="idea__top">
            <Heading title="У вас своя уникальная идея по разработке мерча?" text="Изготовим мерч по вашему дизайну. Расскажем лайфхаки и ознакомим с  технологией производства, предоставим образцы матералов. " />
            <div className="idea__picture">
              <div className="idea__rocket idea__rocket_1">
                <img loading="lazy" decoding="async" src={require(`../../assets/images/idea/rocket-1.png`)} width="88.92" height="142.84" alt="rocket" />
              </div>
              <img loading="lazy" decoding="async" src={require(`../../assets/images/idea/lamp.png`)} width="431" height="421.3" alt="lamp" />
            </div>
            <div className="idea__rocket idea__rocket_2">
              <img loading="lazy" decoding="async" src={require(`../../assets/images/idea/rocket-2.png`)} width="88.92" height="142.84" alt="rocket" />
            </div>
          </div>
          <div className="idea__bottom">
            <h2 className="idea__latter">Введите свои контактные данные, и наш менеджер свяжется с Вами в течении 1 часа</h2>
            <Form direction="row" />
          </div>
        </div>
      </div>
    </section>
  )
}
