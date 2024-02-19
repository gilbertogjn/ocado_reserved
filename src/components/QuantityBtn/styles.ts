import styled from 'styled-components'
import vars from '../../styles/vars'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;

  span {
    width: 100%;
    text-align: center;
    border: 1px solid #ddd;
    padding: 6px;
    border-radius: 8px;
  }
`

export const Minus = styled.span`
  cursor: pointer;

  &:hover {
    border: 1px solid ${vars.black};
  }
`

export const NumberQtd = styled.span``

export const Plus = styled.span`
  background-color: ${vars.yellow};
  cursor: pointer;

  &:hover {
    background-color: ${vars.yellowDark};
  }
`
