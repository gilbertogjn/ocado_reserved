import styled from 'styled-components'
import vars from '../../styles/vars'

export const Card = styled.div`
  background-color: #fff;
  padding: 14px;
  border-radius: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 240px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    max-height: 300px;
  }

  @media only screen and (max-width: 810px) {
    width: 100%;
    height: 100%;
    max-height: 300px;
  }
`

export const infoSection = styled.div``

export const ProductImg = styled.img`
  display: block;
  width: 60%;
  max-width: 95px;
  margin: 0 auto 6px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    max-width: 150px;
  }
`

export const ProductName = styled.a`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 150px;
  max-height: 32px;
  text-align: center;
  font-size: 12px;
  font-weight: normal;
  margin-bottom: 3px;
  cursor: pointer;
  text-decoration: none;
  color: ${vars.textColor};
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (max-width: 810px) {
    width: 100%;
  }
`

export const ProductWeight = styled.span`
  display: block;
  font-size: 12px;
  color: ${vars.darkGrey};
  text-align: center;
`

export const ProductPrice = styled.p`
  display: block;
  text-align: center;
  font-size: 14px;
  margin-bottom: 8px;
`

export const NomeContato = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const TituloCampo = styled.label`
  font-size: 14px;
  font-weight: bold;
`

export const Campo = styled.input`
  color: #8b8b8b;
  font-size: 12px;
  display: block;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px 12px;
  background-color: transparent;
  text-align: center;
`

export const BarraAcoes = styled.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  margin-right: 4px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: all ease 0.1s;
  background-color: transparent;
`

export const BotaoEditar = styled(Botao)`
  border: 1px solid ${vars.black};
  color: ${vars.black};

  &:hover {
    background-color: ${vars.black};
    color: #fff;
  }
`

export const BotaoSalvar = styled(Botao)`
  border: 1px solid ${vars.green};
  color: ${vars.green};

  &:hover {
    background-color: ${vars.green};
    color: #fff;
  }
`

export const RemoveBtn = styled(Botao)`
  position: absolute;
  top: 14px;
  right: 14px;
  color: #fff;
  padding: 1px;
  font-size: 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${vars.darkGrey};

  &:hover {
    background-color: ${vars.red};
    color: #fff;
  }
`
