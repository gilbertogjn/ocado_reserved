import { useSelector } from 'react-redux'
import Product from '../../components/Product'
import { RootReducer } from '../../store'
import { ProductGrid } from './styles'

const ProductsList = () => {
  const { itens } = useSelector((state: RootReducer) => state.products)
  return (
    <ProductGrid>
      {itens.map((p) => (
        <li key={p.price}>
          <Product
            id={p.id}
            name={p.name}
            price={p.price}
            quantity={p.quantity}
            weight={p.weight}
            img={p.img}
          />
        </li>
      ))}
    </ProductGrid>
  )
}

export default ProductsList
