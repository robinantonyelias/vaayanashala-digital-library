function renderFavourites() {
  const favs = getFavourites();
  byId("favGrid").innerHTML = favs.map((book) => buildBookCard(book)).join("");
  byId("emptyFavsState").style.display = favs.length ? "none" : "block";
  initReveal();
  initTilt();
}

document.addEventListener("DOMContentLoaded", () => {
  requireLogin();
  setMediaBackdrop(MEDIA.shelfVideo, MEDIA.studyImage);
  window.handleFavouriteClick = function(book, button) {
    toggleFavourite(book);
    button.textContent = isFavourite(book.id) ? "*" : "+";
    setTimeout(renderFavourites, 180);
  };
  renderFavourites();
});
