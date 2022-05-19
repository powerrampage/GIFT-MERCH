import { useState, useRef, useEffect, FC } from 'react';
import '../assets/styles/layout/information.scss'
import { Accordion } from '../components/UI/Accordion/Accordion'
import { Heading } from '../components/UI/Heading/heading'
import { ReactComponent as CallIcon } from "../assets/icons/call.svg";
import { Form } from '../components/UI/Form/Form';


export const Information: FC = () => {
  // FAQIMAGE CLONE
  const faqImage = useRef(null)
  const contactsInner = useRef<any>(null)
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    if (contactsInner.current && dimensions.width <= 900) {
      contactsInner.current.insertAdjacentElement("beforeend", faqImage.current)
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  });


  // ACCORDION
  type AccordionDataType = {
    title: string
    content: {
      text: string
      list?: Array<string>
    }
    active?: boolean
  }[]

  const accordionData: AccordionDataType = [
    {
      title: 'Материал',
      content: {
        text: "Вы можете заказать у нас пошив толстовок из любого вида материалов: ",
        list: ["Хлопок 100%", "Хлопок/полиэстер 85/15%", "Флис"]
      },
      active: true
    },
    {
      title: 'Как заказать',
      content: {
        text: "Вы можете заказать у нас пошив толстовок из любого вида материалов: ",
        list: ["Шелкография", "Вышивка", "Цифровая печать", "Флекс"]
      }
    },
    {
      title: 'Оплата и доставка',
      content: {
        text: `
          — Не рекомендуем использовать моющие средства и стиральные порошки с отбеливателями и хлором. //
          — Перед глажкой и стиркой желательно вывернуть изделие наизнанку. //
          — Стирка в прохладной воде не выше 30°С без включения режима сушки //
        `
      },
    },
    {
      title: 'Свежее дыхание в корпоративной жизни',
      content: {
        text: "Вы можете заказать у нас пошив толстовок из любого вида материалов: ",
        list: ["Шелкография", "Вышивка", "Цифровая печать", "Флекс"]
      }
    },
  ];

  return (
    <main className="information">
      <section className="information__titles titles-information">
        <div className="titles-information__container">
          <Heading title='Свежее дыхание в корпоративной жизни' text='Итак, сайт Mechy, который вы&nbsp;видите перед собой, является кульминацией &laquo;идеального шторма&raquo; многолетнего поиска, оттачивания, создания и&nbsp;объединения наших навыков и&nbsp;опыта. А&nbsp;теперь&nbsp;&mdash; вот оно! Мы&nbsp;очень рады поделиться с&nbsp;вами нашим ассортиментом, нашими идеями и&nbsp;нашей страстью.' />
          <Heading title='Снимаем головную боль' text='Наша цель состоит в том, чтобы избавить Вас от лишнего. Выбор и заказ брендированной продукции должен проходить приятно, а все сложности и специфики производства останутся за кулисами. Будте максимально продуктивны в своем деле и не расстачивайте свою эненргию  на поиски, задачи и контроль подрядчиков.' />
        </div>
      </section>
      <section className="information__faq faq-information">
        <div className="faq-information__container">
          <Heading title='Часто задаваемые вопросы' />
          <div className="faq-information__inner">
            <div className="faq-information__accardion">
              {accordionData.map(({ title, content, active }): React.ReactNode => {
                return <Accordion title={title} content={content} active={active} key={Math.random() * 21} />
              })}
            </div>
            <div className="faq-information__image" ref={faqImage}>
              <img loading="lazy" decoding="async" src={require("../assets/images/FAQ.png")} width="556.01" height="556" alt="FAQ IMAGE" />
            </div>
          </div>
        </div>
      </section>
      <section className="information__contactUs contactUs-information">
        <div className="contactUs-information__container">
          <div className="contactUs-information__inner" ref={contactsInner}>
            <div className="contactUs-information__column contactUs-information__column_first">
              <Heading title='Контакты' star={<CallIcon />} />
              <div className="contactUs-information__contacts contacts-information">
                <a className="contacts-information__mail" href="mailto:example@gmail.com">example@gmail.com</a>
                <a className="contacts-information__phone" href="tel:+998914105839">+380 630 130 103</a>
                <div className="contacts-information__social">
                  <a href="https://www.viber.com/" target="_blank">
                    <img loading="lazy" decoding="async" src={require(`../assets/images/social-icons/viber.png`)} width="33.98" height="33.98" alt="Viber icon" />
                  </a>
                  <a href="https://www.telegram.org/" target="_blank">
                    <img loading="lazy" decoding="async" src={require(`../assets/images/social-icons/telegram.png`)} width="33.98" height="33.98" alt="Telegram icon" />
                  </a>
                  <a href="https://www.whatsapp.com/" target="_blank">
                    <img loading="lazy" decoding="async" src={require(`../assets/images/social-icons/whatsapp.png`)} width="33.98" height="33.98" alt="Whatsapp icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="contactUs-information__column contactUs-information__column_sec">
              <Heading title='Свяжитесь с нами' />
              <div className="contactUs-information__details">
                <p>Введите свои контактные данные, и наш менеджер свяжется с Вами <mark>в течении 15 минут</mark></p>
                <Form direction='column' />
              </div>
            </div>
          </div>
      </div>
      </section>
    </main >
  )
}
