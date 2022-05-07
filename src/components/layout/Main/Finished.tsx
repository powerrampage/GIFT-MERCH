import { useRef } from "react";
import { Link } from "react-router-dom";
// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
// Component UI
import { Heading } from "../../UI/Heading/heading";
// Styles
import 'swiper/css';
import 'swiper/css/pagination';
import "../../../assets/styles/layout/main/finished.scss"
// Images & Icons
import sweaterMockup from "../../../assets/images/Main/finished/sweater-mockup.jpg";
import { ReactComponent as ArrowSlider } from "../../../assets/icons/slider-arrow.svg";

export const Finished = () => {

  const slidersNum: Array<number> = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2];
  const sliderItems = slidersNum.map((n) =>
    <SwiperSlide key={Math.random()}>
      <Link to="/">
        <img loading="lazy" decoding="async" src={require(`../../../assets/images/Main/finished/slider/0${n}.png`)} width="133" height="133" alt="Примеры" />
      </Link>
    </SwiperSlide>
  );

  const navigationPrev = useRef<HTMLButtonElement>(null)
  const navigationNext = useRef<HTMLButtonElement>(null)
  const paginationLabel = useRef<HTMLDivElement>(null)

  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation: any = Swiper.params.navigation;
      navigation.prevEl = navigationPrev.current;
      navigation.nextEl = navigationNext.current;
    }
    if (typeof Swiper.params.pagination !== 'boolean') {
      // @ts-ignore
      Swiper.params.pagination.el = paginationLabel.current;
    }
  };

  return (
    <section className="main__finished finished">
      <div className="finished__container">
        <div className="finished__inner">
          <div className="finished__left">
            <img loading="lazy" decoding="async" src={sweaterMockup} width="753" height="532" alt="Sweater Mockup" />
          </div>
          <div className="finished__right">
            <Heading title="Помимо готовой продукции высокого качества, мы можем для Вас произвести одежду, аксессуры, вкусности и другое под заказ." text="Благодаря личному производству мы изготавливаем большие партии в короткие сроки, а так же у Вас всегда есть возможность кастомизировать изделия." />
            <div className="finished__slider slider-finished">
              <Swiper
                onBeforeInit={onBeforeInit}
                speed={400}
                modules={[Navigation, Pagination]}
                navigation={{
                  prevEl: navigationPrev.current,
                  nextEl: navigationNext.current,
                }}
                pagination={{ type: 'fraction' }}
                spaceBetween={25}
                slidesPerView={4}
              >
                {sliderItems}
              </Swiper>
              <div className="slider-finished__ctrl">
                <button className="slider-finished__navigation_prev" ref={navigationPrev}><ArrowSlider /></button>
                <div className="slider-finished__pagination" ref={paginationLabel}></div>
                <button className="slider-finished__navigation_next" ref={navigationNext}><ArrowSlider /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}