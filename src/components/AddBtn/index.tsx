import { IoAdd } from 'react-icons/io5'
import { Circulo } from './styles'

const AddBtn = () => (
  <Circulo to="/newitem">
    <IoAdd /> Add Item
  </Circulo>
)

export default AddBtn
