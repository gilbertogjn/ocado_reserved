import styled from 'styled-components'
import vars from '../../styles/vars'

export const InputSearch = styled.input`
  padding: 9px;
  border: 2px solid ${vars.purple};
  width: 100%;
  max-width: 300px;
  height: 36px;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 600px) {
    border-radius: 8px 0 0 8px;
  }
`

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: ${vars.purple};
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: 0 8px 8px 0;
  height: 36px;
  cursor: pointer;

  &:hover {
    background-color: ${vars.darkPurple};
  }
`
