import { useRef } from 'react';
// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
// STYLES
import 'swiper/css';
import 'swiper/css/pagination';
import style from "./product.module.scss"
// ICONS
import { ReactComponent as ShoppingBasket } from "../../../assets/icons/shopping-basket.svg";
import { ReactComponent as FavoriteIcon } from "../../../assets/icons/favorite.svg";
import { ReactComponent as ArrowSlider } from "../../../assets/icons/slider-arrow.svg";
// TYPES
import { ProductProps } from "./product.type";
import { ProductColorType } from "./product.type";

export const Product = ({ item }: ProductProps) => {
  const navigationPrevProduct = useRef<HTMLButtonElement>(null)
  const navigationNextProduct = useRef<HTMLButtonElement>(null)
  const paginationLabel = useRef<HTMLDivElement>(null)

  const onBeforeInitProduct = (Swiper: SwiperCore): void => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation: any = Swiper.params.navigation;
      navigation.prevEl = navigationPrevProduct.current;
      navigation.nextEl = navigationNextProduct.current;
    }
    if (typeof Swiper.params.pagination !== 'boolean') {
      // @ts-ignore
      Swiper.params.pagination.el = paginationLabel.current;
    }
  };
  return (
    <article className={`${style.product} product`} key={Math.random() * 32}>
      <div className={style.image}>
        {item.favorite ? <div className={style.favorite}>
          <FavoriteIcon />
        </div> : null}
        <div className={style.slider}>
          <Swiper
            preloadImages={false}
            lazy={true}
            onBeforeInit={onBeforeInitProduct}
            modules={[Navigation, Pagination]}
            speed={400}
            navigation={{
              prevEl: navigationPrevProduct.current,
              nextEl: navigationNextProduct.current,
            }}
            spaceBetween={0}
            slidesPerView="auto"
            pagination={{ type: "fraction" }}
          >
            {item.images.map((eachImage: string) => {
              return (
                <SwiperSlide key={Math.random() * 91}>
                  <img loading="lazy" decoding="async" src={eachImage} width="255" height="315" alt={item.title}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className={style.sliderControl}>
            <button className={style.navigationPrev} ref={navigationPrevProduct}><ArrowSlider /></button>
            <div className={style.pagination} ref={paginationLabel}>
            </div>
            <button className={style.navigationNext} ref={navigationNextProduct}><ArrowSlider /></button>
          </div>
        </div>
      </div>
      <div className={style.caption}>
        <div className={style.description}>
          <h2 className={style.title}>{item.title}</h2>
          <p className={style.text}>{item.text}</p>
        </div>
        <div className={`${style.colors} product__colors`}>
          {item.colors.map((color: ProductColorType) => {
            return <div className={style.color} key={color} style={{ background: color }}></div>
          })}
        </div>
        <div className={style.bottom}>
          <p className={style.price}>From Price {item.price}</p>
          <div className={style.basket}><ShoppingBasket /></div>
        </div>
      </div>
    </article >
  )
}