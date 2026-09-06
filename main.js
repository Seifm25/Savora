const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const selectedCategory = button.getAttribute('data-category');
    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (selectedCategory === 'all' || selectedCategory === cardCategory) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  });
});
function getCart() {
  return JSON.parse(localStorage.getItem('savora_cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('savora_cart', JSON.stringify(cart));
}

document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.product-card');
    const name = card.querySelector('.product-title').innerText;
    const price = parseFloat(card.querySelector('.price').innerText.replace('$', ''));
    const img = card.querySelector('img').getAttribute('src');

    let cart = getCart();
    const existing = cart.find(item => item.name === name);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ name, price, img, qty: 1 });
    }

    saveCart(cart);

    const originalText = btn.innerText;
    btn.innerText = "Added ✓";
    setTimeout(() => { btn.innerText = originalText; }, 1000);
  });
});



