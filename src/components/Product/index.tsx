import { useDispatch } from 'react-redux'
import { IoIosClose } from 'react-icons/io'

import * as S from './styles'
import QuantityBtn from '../QuantityBtn'

import { remove } from '../../store/reducers/products'
import ProductClass from '../../models/Product'

type Props = ProductClass

const Product = ({ name, price, quantity, weight, img, id }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Card>
      <S.infoSection>
        <S.ProductImg src={img} />
        <S.ProductName href="#">{name}</S.ProductName>
        <S.ProductWeight>{weight}</S.ProductWeight>
      </S.infoSection>
      <S.RemoveBtn onClick={() => dispatch(remove(id))}>
        <IoIosClose />
      </S.RemoveBtn>
      <S.QtdBar>
        <S.ProductPrice>{price}</S.ProductPrice>
        <QuantityBtn quantityField={quantity} />
      </S.QtdBar>
    </S.Card>
  )
}

export default Product
