import { SewProducts } from "../components/layout/Sewing/SewProducts"
import '../assets/styles/layout/sewing.scss'

export const Sewing = () => {
  return (
    <main className='sewing'>
      <SewProducts />
      <section className="sewing__info info-sewing">
        <div className="info-sewing__container">
          <div className="info-sewing__inner">
            <article className="info-sewing__item">
              <h1 className="info-sewing__title">Сроки изготовления</h1>
              <p className="info-sewing__text">Сроки пошива будут зависеть от&nbsp;объема Вашего заказа и&nbsp;сложности моделей. В&nbsp;среднем изготовление корпоративной продукции занимает 10 &minus;18 рабочих дней с&nbsp;момента утверждения всех деталей.  Если&nbsp;же Вам нужно &laquo;на&nbsp;вчера&raquo;&nbsp;&mdash; Вы&nbsp;можете согласовать такие условия со&nbsp;своими личным менеджером.</p>
            </article>
            <article className="info-sewing__item">
              <h1 className="info-sewing__title">Стоимость</h1>
              <p className="info-sewing__text">Стоимость производства брендированной продукции на&nbsp;заказ расчитывается индивидуально. Цена зависит от&nbsp;сложности работы, брендирования, материалов, тиража и&nbsp;срочности. Мы&nbsp;подберем для вас оптимальный вариант в&nbsp;соответствии с&nbsp;вашим бюджетом</p>
            </article>
            <article className="info-sewing__item">
              <h1 className="info-sewing__title">Брендирование</h1>
              <p className="info-sewing__text">Стоимость производства брендированной продукции на&nbsp;заказ расчитывается индивидуально. Цена зависит от&nbsp;сложности работы, брендирования, материалов, тиража и&nbsp;срочности. Мы&nbsp;подберем для вас оптимальный вариант в&nbsp;соответствии с&nbsp;вашим бюджетом</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
