import { Link } from 'react-router-dom'

import styled from 'styled-components'
import vars from '../../styles/vars'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${vars.purple};
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 10px;
  border-radius: 18px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  line-height: 1;

  &:hover {
    background-color: ${vars.darkPurple};
  }

  @media only screen and (max-width: 600px) {
    bottom: 25px;
    right: 25px;
    font-size: 12px;
  }
`
