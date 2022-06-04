const types = [
  {id: 1, type: 'pizza', name: 'пицца'},
  {id: 2, type: 'drinks', name: 'напитки'},
  {id: 3, type: 'snacks', name: 'снеки'},
  {id: 4, type: 'other', name: 'другое'}
]

const menu = [
  {id: 10, typeId: 1, name: 'Пепперони'},
  {id: 12, typeId: 1, name: 'Моцарелла'},
  {id: 13, typeId: 2, name: 'Кола'},
  {id: 14, typeId: 1, name: 'Мясная'},
  {id: 15, typeId: 3, name: 'Чипсы'}
]

const usedSet = new Set()
menu.forEach(item => {
  usedSet.add(types.find(type => type.id === item.typeId))
})
const usedTypes = Array.from(usedSet).sort((a, b) => a.id - b.id)
console.log(usedTypes)