import styled from 'styled-components'
import vars from '../../styles/vars'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 34px 0 16px;

  @media only screen and (max-width: 600px) {
    padding: 0 16px;
  }
`

export const SearchLabel = styled.label`
  background-color: ${vars.purple};
  color: #fff;
  padding: 8px 16px;
  height: 36px;
  border-radius: 8px 0 0 8px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

export const AddListBtn = styled.button`
  cursor: pointer;
  background-color: ${vars.yellow};
  border-radius: 8px;
  padding: 8px;
  border: none;

  &:hover {
    background-color: ${vars.yellowDark};
  }
`

export const NewProductGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 18px;
  width: 100%;
  border-radius: 16px;
  padding: 18px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`
