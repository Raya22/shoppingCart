/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;
let tBody = document.getElementsByTagName('tbody')[0];
table.appendChild(tBody);
let tFoot = document.getElementsByTagName('tfoot')[0];

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {

  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tBody.innerHTML = '';


}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  for (let i = 0; i < cart.items.length; i++) {

    let newRow = document.createElement('tr')
    tBody.appendChild(newRow);
    let td1 = document.createElement('td');
    td1.textContent = 'x';
    newRow.appendChild(td1);
    let td2 = document.createElement('td');
    td2.textContent = cart.items[i].quantity;
    newRow.appendChild(td2);
    let td3 = document.createElement('td');
    td3.textContent = cart.items[i].product;
    newRow.appendChild(td3);

  }
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}
function addImage(parent, cartItems) {
  let imgElement = document.createElement('img');
  for (let i = 0; i < Product.allProducts.length; i++) {
    if (Product.allProducts[i].name === cartItems) {
      imgElement.setAttribute('src', Product.allProducts[i].filePath);
    }
  }
  parent.appendchild(imgElement);

}

function addElement(element, parent, value, id = -1) {
  let newElement = document.createElement('element');
  newElement.textContent = value;
  if (id !== -1) {
    newElement.setAttribute('id', id);
  }
  parent.appendchild(newElement);
  return newElement;
}

function removeItemFromCart(event) {
  event.preventDefault();
  if (event.target.textContent === 'x') {
    cart.items.splice(event.target.id, 1);

  }


  cart.saveToLocalStorage();
  renderCart();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}


// This will initialize the page and draw the cart on screen
renderCart();
