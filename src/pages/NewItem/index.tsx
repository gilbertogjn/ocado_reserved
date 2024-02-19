import NewProductsList from '../../containers/NewProductsList'
import { BackBtn, TitleAndBtn } from './styles'
import { HeaderBar } from '../../styles'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const NewItem = () => {
  const navigate = useNavigate()
  return (
    <>
      <HeaderBar>
        <TitleAndBtn>
          <BackBtn onClick={() => navigate('/')}>
            <FaArrowLeft />
          </BackBtn>
          <h2>Add item</h2>
        </TitleAndBtn>
      </HeaderBar>
      <NewProductsList />
    </>
  )
}

export default NewItem
