import style from "./product.module.scss"
import { ReactComponent as ShoppingBasket } from "../../../assets/icons/shopping-basket.svg";


type ProductProps = {
  data: {
    title: string
    text: string
    price: string
    favorite: boolean
    colors: ["purple" | "green" | "white" | "orange" | "blue" | "violet" | "cyan" | "black"]
    images: Array<string>
  }[]
}

export const Product = ({ data }: ProductProps) => {
  return (
    <>
      {data.map(item => {
        return (
          <article className={style.product} key={Math.random()*32}>
            <div className={style.image}>
              <img loading="lazy" decoding="async" src={item.images[0]} width="255" height="315" alt={item.title} />
            </div>
            <div className={style.caption}>
              <div className={style.description}>
                <h2 className={style.title}>{item.title}</h2>
                <p className={style.text}>{item.text}</p>
              </div>
              <div className={style.color}></div>
              <div className={style.bottom}>
                <p className={style.price}>From Price {item.price}</p>
                <div className={style.basket}><ShoppingBasket /></div>
              </div>
            </div>
          </article>
        )
      })}
    </>
  )
}