import { useState, useEffect, FC } from 'react'
import axios from 'axios'
import '../../../assets/styles/layout/sets/readyKits.scss'
import { Product } from '../../UI/Product/Product';
import { ReactComponent as ArrowSlider } from "../../../assets/icons/slider-arrow.svg";
import { Heading } from '../../UI/Heading/heading';
import { Popup } from '../../UI/Popup/Popup';
import { itemProduct } from '../Goods/catalog.type';


export const ReadyKits: FC = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  let [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage] = useState(4)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await axios('https://raw.githubusercontent.com/powerrampage/productsJson/main/readyKits.json');
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
  // HANDLE_POPUP
  const [openModel, setOpenModel] = useState(false)
  const [popupProduct, setPopupProduct] = useState({})

  const handlePopup = (event: React.MouseEvent | any, item: itemProduct) => {
    event.target.setAttribute("aria-expanded", true)
    setPopupProduct(item)
    setOpenModel(true)
    document.body.classList.add("active")
    event.stopPropagation()
  }
  window.onclick = function() {
    setOpenModel(false)
    document.body.classList.remove("active")
  }
  return (
    <section className="sets__readyKits readyKits">
      <div className="readyKits__container">
        <Heading title='Готовые наборы' />
        <div className="readyKits__inner">
          {loading ? <div className='products-catalog__loading'>
            <img loading="lazy" decoding="async" src={require("../../../assets/images/loading.gif")} width="500" height="300" alt="Loading..." />
          </div> : currentPosts.map(item => {
            return (
              <Product item={item} key={Math.random() * Math.random() * 47} openProduct={handlePopup} />
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
        {openModel ? <Popup product={popupProduct} ariaHidden={!openModel} setOpenModel={setOpenModel} /> : null}
      </div>
    </section>
  )
}
