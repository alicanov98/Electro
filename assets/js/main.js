// Open and close cart
let isOpen = false;
function openCard() {
  if (isOpen == false) {
    document.querySelector(".cardDropdown").classList.add("active");
    isOpen = true;
  } else {
    document.querySelector(".cardDropdown").classList.remove("active");
    isOpen = false;
  }
}

// Add to cart function
let cartList = document.querySelector("#cartList");

function checkCart() {
  let products = document.querySelectorAll(".productWidget");
  if (products.length == 0) {
    cartList.innerHTML += `<h2 class="empty">Cart is Empty</h2>`;
  } else {
    document.querySelector(".empty")?.remove();
  }
}
checkCart();

function addToCart(item) {
  cartList.innerHTML += `<div class="productWidget">
    <div class="productImg">
      <img src="${item.children[0].children[0].children[0].src}" alt="#">
    </div>
    <div class="productBody">
      <h3>
        <a href="#">${item.children[0].children[1].children[1].children[0].innerText}</a>
      </h3>
      <h4>
        <span class="qty">1x</span>
      ${item.children[0].children[1].children[2].children[0].innerText}
      </h4>
    </div>
  <button class="delete" onclick="deleteItem()">
    <i class="fa-solid fa-xmark"></i>
  </button>
  </div>`;
  checkCart();
}

function deleteItem() {
  let currentItem = document.querySelectorAll(".delete");
  for (let i = 0; i < currentItem.length; i++) {
    currentItem[i].onclick = function () {
      this.parentElement.remove();
      checkCart();
    };
  }
}
