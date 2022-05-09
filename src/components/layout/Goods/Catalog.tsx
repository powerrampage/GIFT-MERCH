import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Product } from '../../UI/Product/Product'
import '../../../assets/styles/layout/goods/catalog.scss'
import { ReactComponent as ArrowSlider } from "../../../assets/icons/slider-arrow.svg";

export const Catalog = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage] = useState(8)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await axios('https://raw.githubusercontent.com/powerrampage/productsJson/main/db.json');
        setData(res.data);
        setLoading(false)
      } catch {
        throw new Error("Fetching error");
      }
    }
    getData()
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * dataPerPage;
  const indexFirstPost = indexOfLastPost - dataPerPage;
  const currentPosts = data.slice(indexFirstPost, indexOfLastPost)


  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginationItem = useRef(null)
  // useEffect(() => {
  //   if (paginationItem.current !== null) {
  //     for (let i = 0; i < pageNumbers.length; i++) {
  //       console.log(paginationItem.current)
  //       // paginationItem.current[i].addEventListener("click")
  //     }
  //   }
  // })


  // Change page
  const paginate = (event: any, pageNumber: number) => {
    event.target.classList.add("active");
    setCurrentPage(pageNumber)
  };

  const onNext = () => {
    if (currentPage <= Math.trunc(data.length / dataPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage !== 1) {
      console.log(currentPage)
      setCurrentPage(currentPage - 1);
    }
  };

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
              {loading ? <div className='products-catalog__loading'>
                <img loading="lazy" decoding="async" src={require("../../../assets/images/loading.gif")} width="500" height="300" alt="Loading..." />
              </div> : currentPosts.map(item => {
                return (
                  <Product item={item} key={Math.random() * Math.random() * 33} />
                )
              })}
            </div>
            <div className="products-catalog__pagination pagination-catalog">
              <button onClick={onPrevious} className="pagination-catalog__prev"><ArrowSlider /></button>
              <ul className="pagination-catalog__list">
                {pageNumbers.map(number => (
                  <li key={number} ref={paginationItem} className="pagination-catalog__item" onClick={(event) => paginate(event, number)}>
                    {number}
                  </li>
                ))}
              </ul>
              <button onClick={onNext} className="pagination-catalog__next"><ArrowSlider /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
