import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { IoIosClose } from 'react-icons/io'

import * as S from './styles'
import QuantityBtn from '../QuantityBtn'

import { remover, editar } from '../../store/reducers/products'
import ProductClass from '../../models/Product'

type Props = ProductClass

const Product = ({ name, price, quantity, weight, img, id }: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [nameField, setNameField] = useState('')
  const [priceField, setPriceField] = useState('')
  const [quantityField, setQuantityField] = useState(1)
  const [imgField, setImgField] = useState('')

  useEffect(() => {
    if (name.length > 0) {
      setNameField(name)
    }
    if (price.length > 0) {
      setPriceField(price)
    }
    if (quantity > 0) {
      setQuantityField(quantity)
    }
    setImgField(img)
  }, [name, price, quantity, img])

  function cancelarEdicao() {
    setEditando(false)
    setNameField(name)
    setPriceField(price)
    setQuantityField(quantity)
  }

  return (
    <S.Card>
      <S.infoSection>
        <S.ProductImg src={img} />
        <S.ProductName href="#">{name}</S.ProductName>
        <S.ProductWeight>{weight}</S.ProductWeight>
      </S.infoSection>
      <S.RemoveBtn onClick={() => dispatch(remover(id))}>
        <IoIosClose />
      </S.RemoveBtn>
      <S.BarraAcoes>
        <S.ProductPrice>{price}</S.ProductPrice>
        <QuantityBtn quantityField={quantity} />
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Product
