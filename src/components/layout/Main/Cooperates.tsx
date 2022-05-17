import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Heading } from "../../UI/Heading/heading"
import "../../../assets/styles/layout/main/cooperates.scss"


export const Cooperates = () => {
  return (
    <section className="main__cooperates cooperates">
      <div className="cooperates__container">
        <Heading title="С нами соотрудничают" />
        <div className="cooperates__slider">
          <Swiper
            speed={400}
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={true}
            navigation
            spaceBetween={0}
            slidesPerView={5}
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 25,
                direction: "vertical"
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1180: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <a href="https://www.nike.com/" target="_blank">
                <img loading="lazy" decoding="async" src={require(`../../../assets/images/Main/cooperates/nike.png`)} width="175" height="63" alt="Nike logo" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.coca-cola.com/" target="_blank">
                <img loading="lazy" decoding="async" src={require(`../../../assets/images/Main/cooperates/Coca-Cola.png`)} width="200" height="63" alt="Coca Cola Logo" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://atlasfestival.com/" target="_blank">
                <img loading="lazy" decoding="async" src={require(`../../../assets/images/Main/cooperates/atlas.png`)} width="141.33" height="62.79" alt="Atlas Weekend Logo" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://megogo.net/" target="_blank">
                <img loading="lazy" decoding="async" src={require(`../../../assets/images/Main/cooperates/megogo.png`)} width="176" height="69" alt="Megogo Logo" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://crazybox.net/" target="_blank">
                <img loading="lazy" decoding="async" src={require(`../../../assets/images/Main/cooperates/crazybox.png`)} width="252.61" height="62.18" alt="Crazybox Logo" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.nike.com/" target="_blank">
                <img loading="lazy" decoding="async" src={require(`../../../assets/images/Main/cooperates/nike.png`)} width="175" height="63" alt="Nike logo" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.coca-cola.com/" target="_blank">
                <img loading="lazy" decoding="async" src={require(`../../../assets/images/Main/cooperates/Coca-Cola.png`)} width="200" height="63" alt="Coca Cola Logo" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://atlasfestival.com/" target="_blank">
                <img loading="lazy" decoding="async" src={require(`../../../assets/images/Main/cooperates/atlas.png`)} width="141.33" height="62.79" alt="Atlas Weekend Logo" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://megogo.net/" target="_blank">
                <img loading="lazy" decoding="async" src={require(`../../../assets/images/Main/cooperates/megogo.png`)} width="176" height="69" alt="Megogo Logo" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://crazybox.net/" target="_blank">
                <img loading="lazy" decoding="async" src={require(`../../../assets/images/Main/cooperates/crazybox.png`)} width="252.61" height="62.18" alt="Crazybox Logo" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
