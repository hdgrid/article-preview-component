const btn = document.querySelector(".article-excerpt__share-icon-container");
const menu = document.querySelector(".article-excerpt__share-icon-menu");

btn.addEventListener('click', function() {
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
});
  