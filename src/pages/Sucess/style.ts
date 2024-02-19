import styled from 'styled-components'
import vars from '../../styles/vars'

export const ContainerSucess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
  text-align: center;

  h3 {
    margin: 18px 0;
  }

  @media only screen and (max-width: 600px) {
    height: auto;
    padding: 32px 0;
  }
`

export const Logo = styled.img`
  max-width: 150px;
`

export const PaymentBtn = styled.button`
  background-color: ${vars.yellow};
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;

  &:hover {
    background-color: ${vars.yellowDark};
  }
`
