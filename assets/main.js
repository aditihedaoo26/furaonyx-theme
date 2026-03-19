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
