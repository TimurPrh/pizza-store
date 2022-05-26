const initialState = {menu: [
  {type: 'Пицца', id: 0, name: "Пепперони", price: 250, img: '/assets/images/pepper.jpeg',
  description: "Пикантная пепперони, увеличенная порция моцареллы, томатный соус" },
  {type: 'Пицца', id: 1, name: "Ветчина и грибы", price: 300, img: '/assets/images/ham.jpeg',
  description: "Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус" },
  {type: 'Пицца', id: 2, name: "Диабло", price: 350, img: '/assets/images/diablo.jpeg',
  description: "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус" },
  {type: 'Пицца', id: 3, name: "Пепперони", price: 250, img: '/assets/images/pepper.jpeg',
  description: "Пикантная пепперони, увеличенная порция моцареллы, томатный соус" },
  {type: 'Пицца', id: 4, name: "Ветчина и грибы", price: 300, img: '/assets/images/ham.jpeg',
  description: "Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус" },
  {type: 'Пицца', id: 5, name: "Диабло", price: 350, img: '/assets/images/diablo.jpeg',
  description: "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус" },
  {type: 'Пицца', id: 6, name: "Пепперони", price: 250, img: '/assets/images/pepper.jpeg',
  description: "Пикантная пепперони, увеличенная порция моцареллы, томатный соус" },
  {type: 'Пицца', id: 7, name: "Ветчина и грибы", price: 300, img: '/assets/images/ham.jpeg',
  description: "Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус" },
  {type: 'Пицца', id: 8, name: "Диабло", price: 350, img: '/assets/images/diablo.jpeg',
  description: "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус" },
  {type: 'Напитки', id: 9, name: "Coca-Cola Lime", price: 80, img: '/assets/images/cola-lime.jpeg'},
  {type: 'Напитки', id: 10, name: "Coca-Cola Lime 2", price: 100, img: '/assets/images/cola-lime.jpeg'}
], types: [
  {id: 0, name: 'Пицца'},
  {id: 1, name: 'Напитки'}
]}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MENU': 
      return {menu: action.payload.menu, types: action.payload.types}
    default: 
      return state
  }
}

const addMenuAction = (payload) => ({type: 'ADD_MENU', payload})

export {menuReducer, addMenuAction}