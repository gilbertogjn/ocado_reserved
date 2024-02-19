import { useNavigate } from 'react-router-dom'

import {
  AddListBtn,
  NewProductGrid,
  SearchContainer,
  SearchLabel
} from './styles'
import * as S from '../../components/Product/styles'
import SearchBar from '../../components/SearchBar'

const NewProductsList = () => {
  const navigate = useNavigate()
  return (
    <>
      <SearchContainer>
        <SearchLabel>Find a product:</SearchLabel>
        <SearchBar />
      </SearchContainer>
      <NewProductGrid>
        <li>
          <S.Card>
            <S.infoSection>
              <S.ProductImg src="https://www.ocado.com/productImages/245/24581011_0_280x280.jpg?identifier=1d3d682a84dbe58b6a6a389dbbf1df3b" />
              <S.ProductName href="#">
                Cravendale Filtered Fresh Semi Skimmed Milk Fresher for Longer
              </S.ProductName>
              <S.ProductWeight>2L</S.ProductWeight>
            </S.infoSection>
            <S.BarraAcoes>
              <S.ProductPrice>£2.40</S.ProductPrice>
              <AddListBtn onClick={() => navigate('/')}>
                Add to order
              </AddListBtn>
            </S.BarraAcoes>
          </S.Card>
        </li>
        <li>
          <S.Card>
            <S.infoSection>
              <S.ProductImg src="https://www.ocado.com/productImages/305/30567011_0_280x280.jpg?identifier=7d2f1bee5c0e15029f7cf98d34707784" />
              <S.ProductName href="#">
                Yeo Valley Organic Fresh Whole Milk
              </S.ProductName>
              <S.ProductWeight>2L</S.ProductWeight>
            </S.infoSection>
            <S.BarraAcoes>
              <S.ProductPrice>£2.75</S.ProductPrice>
              <AddListBtn onClick={() => navigate('/')}>
                Add to order
              </AddListBtn>
            </S.BarraAcoes>
          </S.Card>
        </li>
        <li>
          <S.Card>
            <S.infoSection>
              <S.ProductImg src="https://www.ocado.com/productImages/278/278140011_0_280x280.jpg?identifier=d461a038242fa015b1a17e341820485a" />
              <S.ProductName href="#">
                Ocado British Skimmed Milk 2 Pints
              </S.ProductName>
              <S.ProductWeight>1.136L</S.ProductWeight>
            </S.infoSection>
            <S.BarraAcoes>
              <S.ProductPrice>£1.20</S.ProductPrice>
              <AddListBtn onClick={() => navigate('/')}>
                Add to order
              </AddListBtn>
            </S.BarraAcoes>
          </S.Card>
        </li>
        <li>
          <S.Card>
            <S.infoSection>
              <S.ProductImg src="https://www.ocado.com/productImages/596/596925011_0_280x280.jpg?identifier=c1c0074ac918d7986744bfe3767c65c7" />
              <S.ProductName href="#">
                Tom Parker Creamery Vitamin Enriched Whole Milk
              </S.ProductName>
              <S.ProductWeight>500ml</S.ProductWeight>
            </S.infoSection>
            <S.BarraAcoes>
              <S.ProductPrice>£1.25</S.ProductPrice>
              <AddListBtn onClick={() => navigate('/')}>
                Add to order
              </AddListBtn>
            </S.BarraAcoes>
          </S.Card>
        </li>
        <li>
          <S.Card>
            <S.infoSection>
              <S.ProductImg src="https://www.ocado.com/productImages/564/564650011_0_280x280.jpg?identifier=0e65fb2527eadfc07d8d029642bc5303" />
              <S.ProductName href="#">
                Arla LactoFREE Semi Skimmed Milk Drink
              </S.ProductName>
              <S.ProductWeight>2L</S.ProductWeight>
            </S.infoSection>
            <S.BarraAcoes>
              <S.ProductPrice>£2.25</S.ProductPrice>
              <AddListBtn onClick={() => navigate('/')}>
                Add to order
              </AddListBtn>
            </S.BarraAcoes>
          </S.Card>
        </li>
      </NewProductGrid>
    </>
  )
}

export default NewProductsList
