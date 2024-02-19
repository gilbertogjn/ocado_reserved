import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyle, { Container, MainTitle, Subtitle } from './styles'

import store from './store'
import Home from './pages/Home'
import NewItem from './pages/NewItem'
import Sucess from './pages/Sucess'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/newitem',
    element: <NewItem />
  },
  {
    path: '/sucess',
    element: <Sucess />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <MainTitle>Ocado Reserved</MainTitle>
      <Subtitle>Lorem ipsum dolor siamet</Subtitle>
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
