// Отримати елемент за ID
const title = document.getElementById('title');
console.log('Елемент за ID:', title);

// Змінити текст заголовка через 3 секунди
setTimeout(() => {
    title.textContent = 'DOM у дії!';
}, 3000);

// Отримати всі елементи з класом 'item'
const items = document.getElementsByClassName('item');
console.log('Елементи з класом "item":', items);

// Змінити текст другого пункту
if (items.length > 1) {
    items[1].textContent = 'Змінений пункт 2';
}

// Отримати перший елемент списку за селектором
const firstItem = document.querySelector('#itemList .item');
console.log('Перший пункт списку:', firstItem);

// Додати обробник події для кнопки зміни тексту
document.getElementById('changeTextButton').addEventListener('click', function() {
    title.textContent = 'Текст змінився!';
});

const arrayOfItems = document.getElementsByClassName('item');
console.log(arrayOfItems.length, "FLJKSNfKSNf")

// Додати обробник події для кнопки додавання пункту
document.getElementById('addItemButton').addEventListener('click', function() {
    const newItem = document.createElement('li');
    const arrayOfItems = document.getElementsByClassName('item');
    console.log(arrayOfItems.length, "FLJKSNfKSNf")
    newItem.textContent = `Новий пункт ${arrayOfItems.length + 1}`;
    newItem.className = 'item';
    document.getElementById('itemList').appendChild(newItem);
});