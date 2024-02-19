import styled from 'styled-components'
import vars from '../../styles/vars'
import { Link } from 'react-router-dom'

export const Btn = styled(Link)`
  display: flex;
  align-items: center;
  background-color: ${vars.yellow};
  color: ${vars.textBtnYellow};
  border: none;
  border-radius: 8px;
  padding: 8px 24px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  height: 36px;

  &:hover {
    background-color: ${vars.yellowDark};
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`

export const TextBtn = styled.p`
  text-align: center;
  margin-left: 4px;
`
