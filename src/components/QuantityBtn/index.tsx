import { useState } from 'react'
import { Minus, NumberQtd, Plus, Wrapper } from './styles'

interface QuantityBtnProps {
  quantityField: number
}

const QuantityBtn = (props: QuantityBtnProps) => {
  const [count, setCount] = useState(props.quantityField)

  const increment = () => {
    if (count <= 98) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count >= 2) {
      setCount(count - 1)
    }
  }

  return (
    <Wrapper>
      <Minus onClick={decrement}>-</Minus>
      <NumberQtd>{count}</NumberQtd>
      <Plus onClick={increment}>+</Plus>
    </Wrapper>
  )
}

export default QuantityBtn
