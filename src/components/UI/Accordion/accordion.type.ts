export type PropsAccordion = {
  title: string
  content: {
    text: string
    list?: Array<string>
  }
  active?: boolean
}