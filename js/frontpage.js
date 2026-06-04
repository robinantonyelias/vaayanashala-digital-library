document.addEventListener("DOMContentLoaded", () => {
  const ticker = byId("tickerTrack");
  if (ticker) {
    const labels = ["Fiction", "Science", "History", "Philosophy", "Technology", "Biography", "Fantasy", "Self-Help"];
    ticker.innerHTML = [...labels, ...labels].map((label) => `<span>${label}</span>`).join("");
  }

  const categoryHost = byId("catPills");
  const featuredHost = byId("featuredBooks");
  const genres = ["All", ...new Set(BOOKS.map((book) => book.genre))];

  function renderBooks(genre = "All") {
    const books = genre === "All" ? BOOKS : BOOKS.filter((book) => book.genre === genre);
    featuredHost.innerHTML = books.slice(0, 6).map((book) => buildBookCard(book, true, false)).join("");
    initReveal();
    initTilt();
  }

  if (categoryHost && featuredHost) {
    categoryHost.innerHTML = genres.map((genre, index) => `<button class="pill ${index === 0 ? "active" : ""}" data-genre="${genre}">${genre}</button>`).join("");
    categoryHost.addEventListener("click", (event) => {
      const pill = event.target.closest("[data-genre]");
      if (!pill) return;
      categoryHost.querySelectorAll(".pill").forEach((item) => item.classList.remove("active"));
      pill.classList.add("active");
      renderBooks(pill.dataset.genre);
    });
    renderBooks();
  }
});
