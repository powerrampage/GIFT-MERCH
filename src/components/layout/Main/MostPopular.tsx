import {Heading} from "../../UI/Heading/heading";
import {Link} from "react-router-dom";
import {ReactComponent as ArrowLong} from "../../../assets/icons/long-arrow.svg";
import {ReactComponent as ShoppingBasket} from "../../../assets/icons/shopping-basket.svg";
import "../../../assets/styles/layout/main/popular.scss"
import { ReactComponent as Star } from "../../../assets/icons/heading-star.svg";

export const MostPopular = () => {
  return (
    <section className="main__popular popular">
      <div className="popular__container">
        <div className="popular__content">
          <div className="popular__basket basket">
            <div className="basket__inner">
              <span className="basket__count">3</span>
              <div><ShoppingBasket/></div>
            </div>
          </div>
          <div className="popular__header">
            <Heading star={<Star/>} title="Самое популярное" text="Товары, которые наиболее часто заказывают наши клиенты"/>
            <Link to="/goods" className="popular__allLink">
              <h3>Все товары</h3>
              <ArrowLong/>
            </Link>
          </div>
          <div className="popular__gallery gallery-popular">
            <Link to="/sewing" className="gallery-popular__item gallery-popular__item--1">
              <img loading="lazy" decoding="async" src={require("../../../assets/images/Main/popular/01.jpg")} width={1101}
                   height={576} alt="Самое популярное"/>
            </Link>
            <Link to="/sewing" className="gallery-popular__item gallery-popular__item--2">
              <img loading="lazy" decoding="async" src={require("../../../assets/images/Main/popular/02.jpg")} width={481}
                   height={312} alt="Самое популярное"/>
            </Link>
            <Link to="/sewing" className="gallery-popular__item gallery-popular__item--3">
              <img loading="lazy" decoding="async" src={require("../../../assets/images/Main/popular/03.jpg")} width={236.05}
                   height={249} alt="Самое популярное"/>
            </Link>
            <Link to="/sewing" className="gallery-popular__item gallery-popular__item--4">
              <img loading="lazy" decoding="async" src={require("../../../assets/images/Main/popular/04.jpg")} width={236.05}
                   height={249} alt="Самое популярное"/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}