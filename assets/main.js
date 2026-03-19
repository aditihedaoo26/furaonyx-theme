// Initialize Lenis smooth scrolling (loaded via CDN in theme.liquid)
const lenis = new Lenis({
  autoRaf: true,
});

// Any specific page setup can go here later
console.log('FURAONYX Shopify Theme initialized successfully.');

function scrollToCollection() {
  document
    .getElementById("collection")
    .scrollIntoView({ behavior: "smooth" });
}

window.scrollToCollection = scrollToCollection;

// --- MAIN CART PAGE INTERACTIONS ---
window.updateMainCart = function(key, quantity) {
  fetch('/cart/change.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: key, quantity: quantity })
  })
  .then(response => response.json())
  .then(cart => {
    window.location.reload();
  })
  .catch(error => console.error('Error updating cart:', error));
};

document.addEventListener('DOMContentLoaded', () => {
  const checkPincodeBtn = document.getElementById('checkPincodeBtn');
  if(checkPincodeBtn) {
    checkPincodeBtn.addEventListener('click', () => {
      const pin = document.getElementById('pincodeInput').value;
      if(pin.length >= 6) {
        document.getElementById('deliveryMsg').style.display = 'block';
      }
    });
  }

  const applyCouponBtn = document.getElementById('applyCouponBtn');
  if(applyCouponBtn) {
    applyCouponBtn.addEventListener('click', () => {
      const code = document.getElementById('couponInput').value;
      if(code.trim().length > 0) {
        document.getElementById('couponMsg').style.display = 'block';
        document.getElementById('discountRow').style.display = 'flex';
      }
    });
  }
});
