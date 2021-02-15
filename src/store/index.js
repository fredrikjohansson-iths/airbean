import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: "Marcus Lindqvist",
      email: "marcus@lindqvist.com"
    },
    menuItems: [
      {
        name: "Bryggkaffe",
        info: "Bryggd på månadens bönor",
        price: 49
      },
      {
        name: "Caffé Doppio",
        info: "Bryggd på månadens bönor",
        price: 49
      },
      {
        name: "Cappuccino",
        info: "Bryggd på månadens bönor",
        price: 49
      },
      {
        name: "Latte Macchiato",
        info: "Bryggd på månadens bönor",
        price: 49
      },
      {
        name: "Kaffe Latte",
        info: "Bryggd på månadens bönor",
        price: 49
      },
      {
        name: "Cortado",
        info: "Bryggd på månadens bönor",
        price: 39
      },
    ],
    cartItems: [],
    orderHistory: [],
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
