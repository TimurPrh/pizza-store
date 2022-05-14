import React from 'react';
import MenuGroup from '../menuGroup/MenuGroup';
import './menuList.scss'

const MenuList = () => {

  // const menu = {
  //   pizzas: {
  //     name: 'Пицца',
  //     list: [
  //       {type: 'pizza', id: 0, name: "Пепперони", price: 250, img: '/assets/images/pepper.jpeg',
  //       description: "Пикантная пепперони, увеличенная порция моцареллы, томатный соус" },
  //       {type: 'pizza', id: 1, name: "Ветчина и грибы", price: 300, img: '/assets/images/ham.jpeg',
  //       description: "Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус" },
  //       {type: 'pizza', id: 2, name: "Диабло", price: 350, img: '/assets/images/diablo.jpeg',
  //       description: "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус" },
  //       {type: 'pizza', id: 3, name: "Пепперони", price: 250, img: '/assets/images/pepper.jpeg',
  //       description: "Пикантная пепперони, увеличенная порция моцареллы, томатный соус" },
  //       {type: 'pizza', id: 4, name: "Ветчина и грибы", price: 300, img: '/assets/images/ham.jpeg',
  //       description: "Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус" },
  //       {type: 'pizza', id: 5, name: "Диабло", price: 350, img: '/assets/images/diablo.jpeg',
  //       description: "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус" },
  //       {type: 'pizza', id: 6, name: "Пепперони", price: 250, img: '/assets/images/pepper.jpeg',
  //       description: "Пикантная пепперони, увеличенная порция моцареллы, томатный соус" },
  //       {type: 'pizza', id: 7, name: "Ветчина и грибы", price: 300, img: '/assets/images/ham.jpeg',
  //       description: "Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус" },
  //       {type: 'pizza', id: 8, name: "Диабло", price: 350, img: '/assets/images/diablo.jpeg',
  //       description: "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус" },
  //     ]
  //   },
  //   drinks: {
  //     name: 'Напитки',
  //     list: [
  //       {type: 'drink', id: 0, name: "Coca-Cola Lime", price: 80, img: '/assets/images/cola-lime.jpeg'},
  //       {type: 'drink', id: 1, name: "Coca-Cola Lime 2", price: 100, img: '/assets/images/cola-lime.jpeg'}
  //     ]
  //   }
  // }

  const menu =  [
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
  ]

  const types = ['Пицца', 'Напитки']

  return (
    <div className='menu-list'>
      <div className='menu-list__header'>
        Наше меню
      </div>
      <div className='menu-list__content'>
        <div className='menu-list__menu-group'>
          {/* {Object.keys(menu).map(group => 
            <MenuGroup key={group} group={group} name={menu[group].name} items={menu[group].list}/>
          )} */}
          {types.map(type => 
            <MenuGroup key={type} name={type} items={menu.filter(item => item.type === type)}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuList;