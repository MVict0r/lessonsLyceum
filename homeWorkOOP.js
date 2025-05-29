let inventory = [
    { id: 1, name: "Apple", price: 0.50, quantity: 200 },
    { id: 2, name: "Banana", price: 0.30, quantity: 150 },
    { id: 3, name: "Cherry", price: 0.90, quantity: 50 }
]
// 1. Отображение названий продуктов Получите все продукты и вывести их названия на консоль.
// первый способ
// for(let product of inventory) {
//     console.log("1 task -", product.name)
// }
// второй способ - "деструктурирование во время обхода"
//  for(let {name: n} of inventory) {
//      console.log("1 task -", n)
//  }

//третий способ
// const product = inventory.map(res => res.name)
// console.log('1 задача, 3 способ: ', product)
// -------------------

// 2. Обновление инвентаря Напишите функцию updateInventory(productId, amount),
// которая обновляет количество определенного ID товара.
// Количество может быть положительной (добавление к инвентарю)
// или отрицательной (вычитание из инвентаря).
// Убедитесь, что функция не позволяет инвентарю опуститься ниже 0.

// function updateInventory(productId, amount) {
//     const product = inventory.find(item => item.id === productId);
//     if (product) {
//         const newQuantity = product.quantity + amount;
//
//         if (newQuantity >= 0) {
//             product.quantity = newQuantity;
//             console.log("2 task -", product)
//         } else console.log("В инвентаре недостаточное количество выбранного продукта");
//
//     } else console.log("2 task - Продукт не найден")
// }

// updateInventory(3, -30)
//----------------------

// 3.1 Поиск товаров с низким запасом Напишите функцию findLowStock(threshold),
// которая возвращает массив названий товаров, количество которых ниже определенного порога.

// function findLowStock(threshold) {
//     const productList = inventory.filter(item => item.quantity < threshold);
//
//     for(let product of productList) {
//         console.log("3.1 task -", product.name)
//     }
// }
//
// findLowStock(190)

// 3.2 Меняем на объект и теперь нужно выполнить используя Object.entries()
// для работы с ключом и данными каждого товара.

// let inventory2 = {
//     Apple: 200,
//     Banana: 150,
//     Cherry: 50
// }
//
// function findLowStockObj(threshold){
//     Object.entries(inventory2).forEach(([name, quantity]) => {
//         if(quantity < threshold) console.log("3.2 task -", name);
//     })
// }
//
// findLowStockObj(190)

//4 Вычислить общую стоимость запасов Напишите функцию totalInventoryValue(),
// которая вычисляет и возвращает общую стоимость запасов.

// const totalInventoryValue = () => {
//     let totalValue = 0
//     for(let i =0; i < inventory.length; i++) {
//         let allQuantity = inventory[i].quantity
//         let allPrice = inventory[i].price
//
//         if(allQuantity){
//             totalValue += allPrice * allPrice
//         }
//     }
//
//     console.log(totalValue)
// }
//
// totalInventoryValue()