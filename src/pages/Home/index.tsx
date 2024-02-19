import BotaoAdd from '../../components/AddBtn'
import SaveBtn from '../../components/SaveBtn'
import ProductsList from '../../containers/ProductsList'
import { HeaderBar, HeaderBarText, HeaderBarTitle } from '../../styles'

const Home = () => (
  <>
    <HeaderBar>
      <HeaderBarTitle>Check your order</HeaderBarTitle>
      <span>
        <HeaderBarText>How often:</HeaderBarText>
        <select>
          <option value="weekly">Weekly</option>
          <option value="fortnightly">Fortnightly</option>
        </select>
        <SaveBtn />
      </span>
    </HeaderBar>
    <ProductsList />
    <BotaoAdd />
  </>
)

export default Home
