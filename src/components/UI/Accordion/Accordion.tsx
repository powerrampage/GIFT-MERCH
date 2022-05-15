import { useState } from 'react';
import style from "./accordion.module.scss"
import { ReactComponent as ArrowAccordion } from "../../../assets/icons/arrow-accordion.svg";


type PropsAccordion = {
  title: string
  content: {
    text: string
    list?: Array<string>
  }
  active?: boolean
}

export const Accordion = ({ title, content, active = false }: PropsAccordion) => {
  const [isActiveAccordion, setIsActiveAccordion] = useState(active);

  return (
    <div className={style.accordion}>
      <article className={style.item}>
        <div className={style.title + ` ${isActiveAccordion && style.active}`} onClick={() => setIsActiveAccordion(!isActiveAccordion)}>
          <h1>{title}</h1>
          <div className={style.arrow}><ArrowAccordion /></div>
        </div>
        {isActiveAccordion &&
          <div className={style.content}>
            <p>{content.text.replaceAll("//", "\t")}</p>
            {content.list ?
              <ul className={style.list}>
                {content.list?.map(item => <li key={item + Math.random()}>{item}</li>)}
              </ul>
              :
              null
            }
          </div>
        }
      </article>
    </div>
  )
}
























/*
      <article className={style.item}>
        <div className={style.title + ` ${isActiveAccordion && style.active}`} onClick={() => setIsActiveAccordion(!isActiveAccordion)}>
          <h1>Материал</h1>
          <div className={style.arrow}><ArrowAccordion /></div>
        </div>
        {isActiveAccordion &&
          <div className={style.content}>
            <p>Вы можете заказать у нас пошив толстовок из любого вида материалов: </p>
            <ul className={style.list}>
              <li>Хлопок 100%</li>
              <li>Хлопок/полиэстер 85/15%</li>
              <li>Флис</li>
            </ul>
          </div>
        }
      </article>
      <article className={style.item}>
        <div className={style.title} onClick={() => setIsActiveAccordion(!isActiveAccordion)}>
          <h1>Виды нанесения</h1>
          <div className={style.arrow}><ArrowAccordion /></div>
        </div>
        {isActiveAccordion &&
          <div className={style.content}>
            <p>Вы можете заказать у нас пошив толстовок из любого вида материалов:</p>
            <ul className={style.list}>
              <li>Шелкография</li>
              <li>Вышивка</li>
              <li>Цифровая печать</li>
              <li>Флекс</li>
            </ul>
          </div>
        }
      </article>
      <article className={style.item}>
        <div className={style.title} onClick={() => setIsActiveAccordion(!isActiveAccordion)}>
          <h1>Уход за товаром</h1>
          <div className={style.arrow}><ArrowAccordion /></div>
        </div>
        {isActiveAccordion &&
          <div className={style.content}>
            <ul>
              <li>&mdash;&nbsp;Не&nbsp;рекомендуем использовать моющие средства и&nbsp;стиральные порошки с&nbsp;отбеливателями и&nbsp;хлором.</li>
              <li>&mdash;&nbsp;Перед глажкой и&nbsp;стиркой желательно вывернуть изделие наизнанку.</li>
              <li>&mdash;&nbsp;Стирка в&nbsp;прохладной воде не&nbsp;выше 30&deg;С без включения режима сушки</li>
            </ul>
          </div>
        }
      </article>

*/