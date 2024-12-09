
class ToggableElement {
  constructor(elementId, color1, color2) {
    this.element = document.getElementById(elementId);
    this.color1 = color1;
    this.color2 = color2;

    // Bind event listener
    this.element.addEventListener("click", this.toggleColor.bind(this));
  }

  // Method to toggle the color of the element
  toggleColor() {
    const currentColor = window.getComputedStyle(this.element).color;
    if (currentColor === this.color1) {
      this.element.style.color = this.color2;
    } else {
      this.element.style.color = this.color1;
    }
  }
}
class Counter {
  constructor(increaseId, decreaseId, displayId, initialValue = 0) {
    this.value = initialValue;
    this.displayElement = document.getElementById(displayId);

    // Bind event listeners for increase and decrease buttons
    const increaseButton = document.getElementById(increaseId);
    const decreaseButton = document.getElementById(decreaseId);

    increaseButton.addEventListener("click", () => this.increment());
    decreaseButton.addEventListener("click", () => this.decrement());

    // Update the display initially
    this.updateDisplay();
  }

  // Method to increase the counter
  increment() {
    this.value++;
    this.updateDisplay();
  }

  // Method to decrease the counter
  decrement() {
    if (this.value > 0) {
      this.value--;
    }
    this.updateDisplay();
  }

  // Method to update the display
  updateDisplay() {
    this.displayElement.textContent = this.value;
  }
}
class CartItem {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    this.element.addEventListener("click", this.deleteItem.bind(this));
  }

  // Method to delete the item
  deleteItem() {
    this.element.remove();
  }
}
// Instantiate ToggableElement objects for heart, red, and love
new ToggableElement("heart", "rgb(255, 0, 0)", "rgba(255,140,0,0.196)");
new ToggableElement("red", "rgb(255, 0, 0)", "rgba(255,140,0,0.196)");
new ToggableElement("love", "rgb(255, 0, 0)", "rgba(255,140,0,0.196)");

// Instantiate Counter objects for quantity, bee size, and pan
new Counter("increase", "decrease", "quantity");
new Counter("dee", "me", "bee");
new Counter("go", "come", "mid");

// Instantiate CartItem objects for each item (assuming multiple items with specific IDs)
new CartItem("deleteItem1");
new CartItem("deleteItem2");
