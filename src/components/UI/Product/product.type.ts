export type ProductProps = {
  item: {
    title: string
    text: string
    price: string
    favorite: boolean
    colors: ["purple" | "green" | "white" | "orange" | "blue" | "violet" | "cyan" | "black"]
    images: Array<string>
  }
}

export type ProductColorType = "purple" | "green" | "white" | "orange" | "blue" | "violet" | "cyan" | "black"