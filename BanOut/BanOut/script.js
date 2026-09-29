const WHATSAPP = "51962261397";

const productSelect = document.getElementById("product");
const quantityInput = document.getElementById("quantity");
const totalElement = document.getElementById("total");
const orderForm = document.getElementById("orderForm");

function updateTotal() {
  const option = productSelect.options[productSelect.selectedIndex];
  const price = option ? Number(option.dataset.price || 0) : 0;
  const quantity = Math.max(1, Number(quantityInput.value) || 1);
  totalElement.textContent = `S/ ${(price * quantity).toFixed(2)}`;
}

productSelect.addEventListener("change", updateTotal);
quantityInput.addEventListener("input", updateTotal);

document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    productSelect.value = button.dataset.product;
    quantityInput.value = 1;
    updateTotal();
    document.getElementById("pedido").scrollIntoView({ behavior: "smooth" });
  });
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const option = productSelect.options[productSelect.selectedIndex];
  const product = option.value;
  const price = Number(option.dataset.price);
  const quantity = Math.max(1, Number(quantityInput.value) || 1);
  const total = (price * quantity).toFixed(2);

  const message =
    `¡Hola, BanOut! 🍩💚%0A%0A` +
    `Quiero realizar un pedido:%0A` +
    `• Producto: ${product}%0A` +
    `• Cantidad: ${quantity}%0A` +
    `• Total: S/ ${total}%0A%0A` +
    `¿Me pueden confirmar mi pedido? 😊`;

  window.open(`https://wa.me/${WHATSAPP}?text=${message}`, "_blank");
});

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

updateTotal();
