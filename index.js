const heart = document.getElementById("heart");
heart.addEventListener("click", () => {
  if (heart.style.color === "red") {
    heart.style.color = "rgba(255,140,0,0.196)";
  } else {
    heart.style.color = "red";
  }
});

console.log(heart);
const red = document.getElementById("red");
red.addEventListener("click", () => {
  if (red.style.color === "red") {
    red.style.color = "rgba(255,140,0,0.196)";
  } else {
    red.style.color = "red";
  }
});

const love = document.getElementById("love");
love.addEventListener("click", () => {
  if (love.style.color === "red") {
    love.style.color = "rgba(255,140,0,0.196)";
  } else {
    love.style.color = "red";
  }
});
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const quantityDisplay = document.getElementById("quantity");

let quantity = 0;

const updateQuantityDisplay = () => {
  quantityDisplay.textContent = quantity;
};

increaseButton.addEventListener("click", () => {
  quantity++;
  updateQuantityDisplay();
});

decreaseButton.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    updateQuantityDisplay();
  }
});
const increase = document.getElementById("dee");
const decrease = document.getElementById("me");
const size = document.getElementById("bee");

let bee = 0;

const updateSize = () => {
  size.textContent = bee;
};

increase.addEventListener("click", () => {
  bee++;
  updateSize();
});
decrease.addEventListener("click", () => {
  if (bee > 0) {
    bee--;
    updateSize();
  }
});
const increment = document.getElementById("go");
const decrement = document.getElementById("come");
const pan = document.getElementById("mid");

let mid = 0;

const updatePan = () => {
  pan.textContent = mid;
};

increment.addEventListener("click", () => {
  mid++;
  updatePan();
});
decrement.addEventListener("click", () => {
  if (mid > 0) {
    mid--;
    updatePan();
  }
});
function deleteItem(element) {
  const item = element.parentElement;
  item.remove();
}
function deleteCard(element) {
  const card = element.closest(".card");

  card.remove();
}
