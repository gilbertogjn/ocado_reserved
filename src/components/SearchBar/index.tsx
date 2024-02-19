import { InputSearch, SearchBtn } from './style'
import { IoIosSearch } from 'react-icons/io'

const SearchBar = () => (
  <>
    <InputSearch type="text" defaultValue="Milk" />
    <SearchBtn>
      <IoIosSearch />
    </SearchBtn>
  </>
)

export default SearchBar
