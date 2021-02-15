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
    
    orders: [
      {
        number: "#AB1123282323Z",
        date: 20200310,
        sum: 443,
      },
      {
        number: "#AB1128382323X",
        date: 20200303,
        sum: 333,
      },
      {
        number: "#AB1444482323X",
        date: 20200218,
        sum: 893,
      },
    ],
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
