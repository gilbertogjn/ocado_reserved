class Product {
  name: string
  price: string
  quantity: number
  img: string
  weight: string
  id: number

  constructor(
    nome: string,
    price: string,
    quantity: number,
    weight: string,
    img: string,
    id: number
  ) {
    this.name = nome
    this.price = price
    this.quantity = quantity
    this.weight = weight
    this.img = img
    this.id = id
  }
}

export default Product
