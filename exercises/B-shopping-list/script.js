function shoppingList(arrayOfPeople) {
  // Write your code here...
  function shoppingList(arrayItems) {
    let content = document.getElementById('content');
    let unorderList = document.createElement('ul');

    //li
    shoppingItems.forEach(el => {
      let itemsListed = document.createElement('li');
      itemsListed.innerHTML = el;

      content.appendChild(list);
      unorderList.appendChild(itemsListed);
    });
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
