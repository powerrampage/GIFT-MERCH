import { Link } from "react-router-dom"
import { Heading } from "../../UI/Heading/heading"
import '../../../assets/styles/layout/sewing/sewProducts.scss'

export const SewProducts = () => {
  return (
    <section className="sewing__sewProducts sewProducts">
      <div className="sewProducts__container">
        <Heading title="Мы можем пошить" text="Товары, которые наиболее часто заказывают наши клиенты" />
        <div className="sewProducts__inner">
          {["Шапки", "Худи", "Свитшоты", "Футболки", "Футболки", "Футболки", "Футболки", "Футболки"].map(item => {
            return (
              <Link to="internal/" className="sewProducts__product product-sewProducts" key={Math.random() * 2}>
                <div className="product-sewProducts__img">
                  <img loading="lazy" decoding="async" src={require('../../../assets/images/Sewing/product.jpg')} width="377" height="295.67" alt="Товар" />
                </div>
                <h2 className="product-sewProducts__caption">{item}</h2>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
