import { Accordion } from '../../UI/Accordion/Accordion';

type AccordionDataType = {
  title: string
  content: {
    text: string
    list?: Array<string>
  }
}[]

const accordionData: AccordionDataType = [
  {
    title: 'Материал',
    content: {
      text: "Вы можете заказать у нас пошив толстовок из любого вида материалов: ",
      list: ["Хлопок 100%", "Хлопок/полиэстер 85/15%", "Флис"]
    }
  },
  {
    title: 'Виды нанесения',
    content: {
      text: "Вы можете заказать у нас пошив толстовок из любого вида материалов: ",
      list: ["Шелкография", "Вышивка", "Цифровая печать", "Флекс"]
    }
  },
  {
    title: 'Уход за товаром',
    content: {
      text: `
        — Не рекомендуем использовать моющие средства и стиральные порошки с отбеливателями и хлором. //
        — Перед глажкой и стиркой желательно вывернуть изделие наизнанку. //
        — Стирка в прохладной воде не выше 30°С без включения режима сушки //
      `
    }
  }
];

export const Preview = () => {
  return (
    <section className="internal__preview preview">
      <div className="preview__container">
        <div className="preview__inner">
          <div className="preview__collapse">
            {accordionData.map(({ title, content }):  React.ReactNode => {
              return <Accordion title={title} content={content} key={Math.random() * 9.7} />
            })}
          </div>
          <div className="preview__photo">
            <img loading="lazy" decoding="async" src={require("../../../assets/images/preview/01.jpg")} width="563" height="755" alt="photo preview" />
          </div>
        </div>
      </div>
    </section>
  )
}
