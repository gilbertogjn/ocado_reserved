import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Product from '../../models/Product'

type productsState = {
  itens: Product[]
}

const initialState: productsState = {
  itens: [
    {
      id: 1,
      name: 'Ocado Strawberries',
      price: '£2.20',
      quantity: 1,
      weight: '227g',
      img: 'https://www.ocado.com/productImages/475/47577011_0_280x280.jpg?identifier=ddf8bb94698b69ce4691aad57d17f068'
    },
    {
      id: 2,
      name: 'M&S Organic Fairtrade Bananas',
      price: '£1.60',
      quantity: 2,
      weight: '5 per pack',
      img: 'https://www.ocado.com/productImages/514/514171011_0_280x280.jpg?identifier=0204f443e9372f8b443e180d2831f7eb'
    },
    {
      id: 3,
      name: 'Clarence Court Burford Brown Large Free Range Eggs',
      price: '£3.10',
      quantity: 1,
      weight: '6 per pack',
      img: 'https://www.ocado.com/productImages/407/407298011_0_280x280.jpg?identifier=a30c5b4567a42923e196f4628178a408'
    },
    {
      id: 4,
      name: 'Warburtons Wholemeal Sliced Medium',
      price: '£1.35',
      quantity: 2,
      weight: '800g',
      img: 'https://www.ocado.com/productImages/275/27547011_0_280x280.jpg?identifier=ac2dacb4f580aa019f967eb715c3a1e6'
    },
    {
      id: 5,
      name: 'Caffe Nero Peru Capsules',
      price: '£3.95',
      quantity: 1,
      weight: '10 per pack',
      img: 'https://www.ocado.com/productImages/561/561159011_0_280x280.jpg?identifier=c2a91adee01e0af796f2dd9bde1c8219'
    },
    {
      id: 6,
      name: 'Birds Eye 6 Original Chicken Breast Steaks',
      price: '£5.65',
      quantity: 2,
      weight: '510g',
      img: 'https://www.ocado.com/productImages/293/293916011_0_280x280.jpg?identifier=598668de636f7276fed16e06897852ae'
    },
    {
      id: 7,
      name: 'Ocado Frozen Blueberries',
      price: '£2.25',
      quantity: 1,
      weight: '350g',
      img: 'https://www.ocado.com/productImages/409/409676011_0_280x280.jpg?identifier=599b3b1f9c7fb760e7f0bed9e3868832'
    },
    {
      id: 8,
      name: 'Tropicana Pure Smooth Orange Fruit Juice',
      price: '£4',
      quantity: 2,
      weight: '1.5L',
      img: 'https://www.ocado.com/productImages/126/12669011_0_280x280.jpg?identifier=298f79d9b2265e59d5961be17ef73f9f'
    },
    {
      id: 9,
      name: 'Andrex Classic Clean Toilet Roll',
      price: '£5.95',
      quantity: 1,
      weight: '9 per pack',
      img: 'https://www.ocado.com/productImages/343/343916011_0_280x280.jpg?identifier=2331c273ef9daae1c9c971ea19ad361a'
    },
    {
      id: 10,
      name: 'Dove Original Beauty Cream Bar',
      price: '£2.75',
      quantity: 3,
      weight: '4 x 90g',
      img: 'https://www.ocado.com/productImages/169/16944011_0_280x280.jpg?identifier=69dca735b7723a1275690e8773f7fd28'
    },
    {
      id: 11,
      name: 'Finish Ultimate Infinity Shine Plus Regular',
      price: '£14',
      quantity: 1,
      weight: '73 per pack',
      img: 'https://www.ocado.com/productImages/610/610828011_0_280x280.jpg?identifier=ab2a2416e94ff0dab0898e8201ad8069'
    }
  ]
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (product) => product.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Product>) => {
      const indexproduct = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexproduct >= 0) {
        state.itens[indexproduct] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Product, 'id'>>) => {
      const productExiste = state.itens.find(
        (product) =>
          product.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (productExiste) {
        alert('Já existe um product com este nome')
      } else {
        const ultimoproduct = state.itens[state.itens.length - 1]

        const productNovo = {
          ...action.payload,
          id: ultimoproduct ? ultimoproduct.id + 1 : 1
        }
        state.itens.push(productNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = productsSlice.actions

export default productsSlice.reducer
