import { FC, useRef, useState } from "react";
import style from "./popup.module.scss"
import { ReactComponent as Ruler } from "../../../assets/icons/ruler.svg";
import { Button } from "../Button/Button";
import { ReactComponent as ArrowAccordion } from "../../../assets/icons/arrow-accordion.svg";
import { ReactComponent as CloseIcon } from "../../../assets/icons/times-circle.svg";

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, FreeMode } from 'swiper';
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { PopupProps } from "./popup.type";



export const Popup: FC<PopupProps> = ({ product, ariaHidden, setOpenModel }: PopupProps) => {
  const [isActiveAccordion, setIsActiveAccordion] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const paginationLabel = useRef(null)

  const onBeforeInitPopup = (Swiper: SwiperCore): void => {
    if (typeof Swiper.params.pagination !== 'boolean') {
      // @ts-ignore
      Swiper.params.pagination.el = paginationLabel.current;
    }
  };

  const popupClose = () => {
    setOpenModel(false)
    document.body.classList.remove("active")
  }

  return (
    <div className={`${style.popup} popup`} aria-hidden={ariaHidden}>
      <div tabIndex={0}></div>
      <dialog className={style.dialog} role="dialog" aria-modal="true" open onClick={(e) => e.stopPropagation()}>
        <div className={style.left}>
          <Swiper
            onBeforeInit={onBeforeInitPopup}
            preloadImages={false}
            modules={[Navigation, Pagination, Thumbs, FreeMode]}
            thumbs={{ swiper: thumbsSwiper }}
            speed={400}
            navigation
            spaceBetween={0}
            slidesPerView="auto"
            pagination={{ clickable: true }}
          >
            {product.images.map((eachImage: string) => {
              return (
                <SwiperSlide key={Math.random() * 909}>
                  <img loading="lazy" decoding="async" src={eachImage} width="500" height="580" alt={product.title}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className={style.thumbs}>
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
            >
              {product.images.map((eachImage: string) => {
                return (
                  <SwiperSlide key={Math.random() * 909}>
                    <img loading="lazy" decoding="async" src={eachImage} width="100" height="100" alt={product.title}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
        <div className={style.right}>
          <h1 className={style.title}>{product.title}</h1>
          <div className={style.view}>
            <div className={style.colors} ref={paginationLabel}></div>
            <p className={style.price}>From Price {product.price}</p>
          </div>
          <p className={style.text}>This exclusive design has a designated laptop-only section that unfolds to lay flat on the X-ray belt to increase your speed, convenience and security. (Pens, Laptop and other devices shown are not included)</p>
          <div className={style.about}>
            <div className={style.size}>
              <h4 className={style.sizeTitle}>Размер</h4>
              <ul className={style.sizeList}>
                <li><a href="">XS</a></li>
                <li><a href="">S</a></li>
                <li><a href="">M</a></li>
                <li><a href="">L</a></li>
                <li><a href="">XXL</a></li>
              </ul>
              <a href="" className={style.pickup}>
                <Ruler />
                <p>Подобрать размер</p>
              </a>
              <Button title="Заказать" bg="#524983" />
            </div>
            <div className={style.characteristics}>
              <div className={style.titleChrct + ` ${isActiveAccordion && style.active}`} onClick={() => setIsActiveAccordion(!isActiveAccordion)}>
                <h3>Характеристики</h3>
                <div className={style.arrowChrct}><ArrowAccordion /></div>
              </div>
              {isActiveAccordion &&
                <div className={style.contentChrct}>
                  <div className={style.contentChrctItem}>
                    <p>Материал</p>
                    <p>100% хлопок</p>
                  </div>
                  <div className={style.contentChrctItem}>
                    <p>Нанесение</p>
                    <p>вышивка, термопечать</p>
                  </div>
                  <div className={style.contentChrctItem}>
                    <p>Торговая марка</p>
                    <p>100% хлопок</p>
                  </div>
                  <div className={style.contentChrctItem}>
                    <p>Плотность, г/м</p>
                    <p>150</p>
                  </div>
                </div>
              }
            </div>
          </div>
          <div className={style.table}>
            <img loading="lazy" decoding="async" src={require("../../../assets/images/popup/table.png")} width="615" height="196" alt="table" />
          </div>
        </div>
        <button className={style.close} onClick={() => popupClose()}>
          <CloseIcon />
        </button>
      </dialog>
      <div tabIndex={0}></div>
    </div>
  )
}