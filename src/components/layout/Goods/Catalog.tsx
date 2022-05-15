import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Product } from '../../UI/Product/Product'
import '../../../assets/styles/layout/goods/catalog.scss'
import { ReactComponent as ArrowSlider } from "../../../assets/icons/slider-arrow.svg";
import { ReactComponent as FilterIcon } from "../../../assets/icons/filter-icon.svg";
import { Popup } from '../../UI/Popup/Popup';
import { itemProduct } from './catalog.type';


export const Catalog = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  let [currentPage, setCurrentPage] = useState(1)
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

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  };

  // Pagination
  const onNext = () => {
    if (currentPage <= Math.trunc(data.length / dataPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const onPrevious = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // FILTER
  const filterBtn = () => {
    if (currentPage !== 1 || currentPage <= Math.trunc(data.length / dataPerPage)) {
      setCurrentPage(currentPage + Math.trunc(Math.random() * 3));
    }
    if (currentPage > 6 && currentPage !== 1) {
      setCurrentPage(currentPage - Math.trunc(Math.random() * 3));
    }
  }

  const filterAllBtn = () => {
    setCurrentPage(currentPage = 1);
  }

  const [handleFilter, setHandleFilter] = useState(false)
  const filterIconHandler = () => {
    setHandleFilter(!handleFilter)
  }

  // SET TO CART
  // const [cart, setCart]: any = useState([])
  // const handleAddCart = (item: any) => {
  //   setCart([...cart, item])
  //   // cart.push(item)
  // }

  // HANDLE_POPUP
  const [openModel, setOpenModel] = useState(false)
  const [popupProduct, setPopupProduct] = useState({})

  const handlePopup = (event: React.MouseEvent | any, item: itemProduct) => {
    event.target.setAttribute("aria-expanded", true)
    setPopupProduct(item)
    setOpenModel(true)
    document.body.classList.add("active")
    event.stopPropagation()
    console.log(item)
  }
  window.onclick = function() {
    setOpenModel(false)
    document.body.classList.remove("active")
  }
  return (
    <section className="goods__catalog catalog">
      <div className="catalog__container">
        <div className="catalog__body">
          <div className="catalog__filter filter">
            <button className={`filter__icon${handleFilter ? " active" : ""}`} onClick={filterIconHandler}>
              <FilterIcon />
              <p>Фильтр</p>
            </button>
            <span className='filter__hr'></span>
            <ul className={`filter__list${handleFilter ? " active" : ""}`}>
              <li className="filter__item" onClick={filterAllBtn}>Все товары</li>
              <li className="filter__item filter__hoodies">
                Толстовки
                <ul className='filter__subList subList-filter'>
                  <li className="subList-filter__item" onClick={filterBtn}>Худи на замке</li>
                  <li className="subList-filter__item" onClick={filterBtn}>Худи классические</li>
                  <li className="subList-filter__item" onClick={filterBtn}>Худи оверсайз</li>
                </ul>
              </li>
              <li className="filter__item" onClick={filterBtn}>Свитшоты</li>
              <li className="filter__item" onClick={filterBtn}>Футболки</li>
              <li className="filter__item" onClick={filterBtn}>Поло</li>
              <li className="filter__item" onClick={filterBtn}>Жилетки</li>
              <li className="filter__item" onClick={filterBtn}>Рюкзаки</li>
              <li className="filter__item" onClick={filterBtn}>Бананки</li>
              <li className="filter__item" onClick={filterBtn}>Эко-сумки/Шопперы </li>
              <li className="filter__item" onClick={filterBtn}>Пледы</li>
              <li className="filter__item" onClick={filterBtn}>Носки</li>
              <li className="filter__item" onClick={filterBtn}>Маски</li>
            </ul>
          </div>
          <div className="catalog__products products-catalog">
            <div className="products-catalog__inner">
              {loading ? <div className='products-catalog__loading'>
                <img loading="lazy" decoding="async" src={require("../../../assets/images/loading.gif")} width="500" height="300" alt="Loading..." />
              </div> : currentPosts.map(item => {
                return (
                  <Product item={item} key={Math.random() * Math.random() * 33} openProduct={handlePopup} />
                )
              })}
            </div>

            <div className="products-catalog__pagination pagination-catalog">
              <button onClick={onPrevious} className="pagination-catalog__prev"><ArrowSlider /></button>
              <ul className="pagination-catalog__list">
                {pageNumbers.map(number => (
                  <li key={number} className="pagination-catalog__item" onClick={() => paginate(number)}>
                    {number}
                  </li>
                ))}
              </ul>
              <button onClick={onNext} className="pagination-catalog__next"><ArrowSlider /></button>
            </div>
          </div>
          {openModel ? <Popup product={popupProduct} ariaHidden={!openModel} setOpenModel={setOpenModel} /> : null}
        </div>
      </div>
    </section>
  )
}
