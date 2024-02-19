import styled, { createGlobalStyle } from 'styled-components'
import vars from './vars'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Mulish', sans-serif;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  body {
    background-color: ${vars.bgGrey};
    padding: 0 8px;
  }
`

export const MainTitle = styled.h1`
  text-align: center;
  font-size: 52px;
  margin: 64px 0 12px;
`

export const Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 64px;
  color: #54585a;
`

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  max-width: 1024px;
  padding: 14px 24px;
  margin: 0 auto;
  background-color: ${vars.purple};
  color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 12px 12px 0 0;

  @media only screen and (max-width: 600px) {
    display: block;
    position: sticky;
    top: 0;
    z-index: 100;
    height: auto;
  }

  span {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 600px) {
      display: grid;
      grid-template-columns: auto auto 1fr;
      gap: 8px;
      margin-top: 8px;
    }

    select {
      border-radius: 8px;
      border: none;
      padding: 8px 10px;
      margin: 0 10px 0 8px;
      cursor: pointer;
      background-color: #fff;
      height: 36px;

      @media only screen and (max-width: 600px) {
        margin: 0;
      }
    }
  }
`

export const HeaderBarTitle = styled.h2`
  @media only screen and (max-width: 600px) {
    display: block;
  }
`

export const HeaderBarText = styled.p`
  @media only screen and (max-width: 600px) {
    width: 34px;
    font-size: 13px;
  }
`

export const Container = styled.main`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto 64px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 18px;

    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
  }
`

export default EstiloGlobal
