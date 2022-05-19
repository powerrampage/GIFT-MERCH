import { FC } from 'react'
import { Catalog } from '../components/layout/Goods/Catalog'
import { Idea } from '../components/layout/Idea'
import '../assets/styles/layout/goods.scss'

export const Goods: FC = () => {
  return (
    <main className="goods">
      <Catalog />
      <Idea />
    </main>
  )
}