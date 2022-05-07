import { useState, useEffect } from 'react'
import { Product } from '../../UI/Product/Product'
import '../../../assets/styles/layout/goods/catalog.scss'

export const Catalog = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('https://raw.githubusercontent.com/powerrampage/productsJson/main/db.json');
        const dataProduct = await res.json()
        setData(dataProduct);
      } catch {
        throw new Error("Fetching error");
      }
    }
    getData()
  }, [])

  return (
    <section className="goods__catalog catalog">
      <div className="catalog__container">
        <div className="catalog__body">
          <div className="catalog__filter filter">
            <span className='filter__hr'></span>
            <ul className="filter__list">
              <li className="filter__item">Все товары</li>
              <li className="filter__item filter__hoodies">
                Толстовки
                <ul className='filter__subList subList-filter'>
                  <li className="subList-filter__item">Худи на замке</li>
                  <li className="subList-filter__item">Худи классические</li>
                  <li className="subList-filter__item">Худи оверсайз</li>
                </ul>
              </li>
              <li className="filter__item">Свитшоты</li>
              <li className="filter__item">Футболки</li>
              <li className="filter__item">Поло</li>
              <li className="filter__item">Жилетки</li>
              <li className="filter__item">Рюкзаки</li>
              <li className="filter__item">Бананки</li>
              <li className="filter__item">Эко-сумки/Шопперы </li>
              <li className="filter__item">Пледы</li>
              <li className="filter__item">Носки</li>
              <li className="filter__item">Маски</li>
            </ul>
          </div>
          <div className="catalog__products products-catalog">
            <div className="products-catalog__inner">
              <Product data={data} />
            </div>
            <div className="products-catalog__pagination"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
