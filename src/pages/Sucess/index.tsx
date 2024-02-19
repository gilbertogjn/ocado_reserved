import { useNavigate } from 'react-router-dom'
import { HeaderBar, HeaderBarTitle } from '../../styles'
import { ContainerSucess, Logo, PaymentBtn } from './style'
import { BackBtn } from '../NewItem/styles'
import { FaArrowLeft } from 'react-icons/fa'
import ocado from '../../img/ocado.png'

const Sucess = () => {
  const navigate = useNavigate()
  return (
    <>
      <HeaderBar>
        <HeaderBarTitle>
          <BackBtn onClick={() => navigate('/')}>
            <FaArrowLeft />
          </BackBtn>
        </HeaderBarTitle>
      </HeaderBar>
      <ContainerSucess>
        <Logo src={ocado} />
        <h3>Your order has been edited successfully!</h3>
        <PaymentBtn>Check Payment Method</PaymentBtn>
      </ContainerSucess>
    </>
  )
}

export default Sucess
