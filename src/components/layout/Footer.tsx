import { Link } from "react-router-dom"
import { ReactComponent as ArrowOc } from "../../assets/icons/arrow-oc.svg";
import "../../assets/styles/layout/footer.scss"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__inner">
          <div className="footer__column">
            <Link to="/" className="footer__logo logo">GIFTS & MERCH</Link>
            <p className="footer__text">Свежее дыхание в&nbsp;корпоративной жизни и&nbsp;жизни корпоративной дыхание свежее</p>
            <div className="footer__contact">
              <a className="footer__phone" href="tel:+998914105839">+380 630 130 103</a>
              <a className="footer__mail" href="mailto:example@gmail.com">example@gmail.com</a>
            </div>
            <div className="footer__social">
              <a href="https://www.facebook.com/" target="_blank">
                <img loading="lazy" decoding="async" src={require(`../../assets/images/social-icons/facebook.png`)} width="24.08" height="24.08" alt="Facebook icon" />
              </a>
              <a href="http://instagram.com/" target="_blank">
                <img loading="lazy" decoding="async" src={require(`../../assets/images/social-icons/instagram.png`)} width="24.08" height="24.08" alt="Instagram icon" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <img loading="lazy" decoding="async" src={require(`../../assets/images/social-icons/linkedin.png`)} width="24.08" height="24.08" alt="LinkedIn icon" />
              </a>
            </div>
          </div>
        <div className="footer__column">
          <ul className="footer__list">
            <h3 className="footer__title">Категории</h3>
            <li><Link to="/" className="footer__link">Пошив</Link></li>
            <li><Link to="/" className="footer__link">Все товары</Link></li>
            <li><Link to="/" className="footer__link">Наборы</Link></li>
            <li><Link to="/" className="footer__link">Производство</Link></li>
          </ul>
        </div>
        <div className="footer__column">
          <ul className="footer__list">
            <h3 className="footer__title">Информация</h3>
            <li><Link to="/" className="footer__link">О нас</Link></li>
            <li><Link to="/" className="footer__link">ЧаВо</Link></li>
            <li><Link to="/" className="footer__link">Контакты</Link></li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__title">Связаться с менеджером</h3>
          <p className="footer__quiz">Есть вопрос на который не нашли ответ? Оставьте контакт и наш менеджер свяжеться с вами</p>
          <form className="footer__form form-footer">
            <input type="number" className="form-footer__input" placeholder="Номер телефона" />
            <button type="submit" className="form-footer__btn"><ArrowOc /></button>
          </form>
        </div>
        </div>
        <div className="footer__copyright">
          <p>© 2022 . All rights reserved.</p>
          <a href="https://policies.google.com/privacy" target="_blank">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  )
}