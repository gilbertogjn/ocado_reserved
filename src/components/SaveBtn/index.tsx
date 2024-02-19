import { Btn, TextBtn } from './styles'
import { TiShoppingCart } from 'react-icons/ti'

const SaveBtn = () => (
  <Btn to="/sucess">
    <TiShoppingCart className="cart" /> <TextBtn>Save Order</TextBtn>
  </Btn>
)

export default SaveBtn
