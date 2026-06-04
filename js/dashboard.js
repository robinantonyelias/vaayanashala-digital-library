let activeGenre = "All";

const params = new URLSearchParams(window.location.search);
const genreFromUrl = params.get("genre");

if (genreFromUrl) {
  activeGenre = genreFromUrl;
}

function runFilters() {
  const query = byId("catalogSearch").value.trim().toLowerCase();
  const rating = Number(byId("ratingInput").value);
  const sort = byId("catalogSort").value;
  byId("ratingDisplayValue").textContent = rating > 1 ? `Rating ${rating.toFixed(1)}+` : "All ratings";

  const filtered = BOOKS
    .filter((book) => activeGenre === "All" || book.genre === activeGenre)
    .filter((book) => !query || book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query) || book.genre.toLowerCase().includes(query))
    .filter((book) => book.rating >= rating)
    .sort((a, b) => {
  if (sort === "rating") {
    return b.rating - a.rating;
  }
  return a.id - b.id;
});

  byId("matchCounter").textContent = filtered.length;
  byId("booksGrid").innerHTML = filtered.map((book) => buildBookCard(book)).join("");
  byId("emptyCatalogState").style.display = filtered.length ? "none" : "block";
  initReveal();
  initTilt();
}

document.addEventListener("DOMContentLoaded", () => {
  requireLogin();
  setMediaBackdrop(MEDIA.shelfVideo, MEDIA.studyImage);

  const genres = ["All", ...new Set(BOOKS.map((book) => book.genre))];
  byId("sidebarGenreGroup").innerHTML = genres.map((genre) => `
    <button class="genre-btn ${genre === activeGenre ? "active" : ""}" data-genre="${genre}">
      <span>${genre}</span><span>${genre === "All" ? BOOKS.length : BOOKS.filter((book) => book.genre === genre).length}</span>
    </button>`).join("");

  byId("sidebarGenreGroup").addEventListener("click", (event) => {
    const button = event.target.closest("[data-genre]");
    if (!button) return;
    activeGenre = button.dataset.genre;
    document.querySelectorAll(".genre-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    runFilters();
  });

  ["catalogSearch", "catalogSort", "ratingInput"].forEach((id) => byId(id).addEventListener("input", runFilters));
  byId("resetFilters").addEventListener("click", () => {
    activeGenre = "All";
    byId("catalogSearch").value = "";
    byId("catalogSort").value = "title";
    byId("ratingInput").value = 1;
    document.querySelectorAll(".genre-btn").forEach((item) => {
  item.classList.toggle("active", item.dataset.genre === activeGenre);
});
    runFilters();
  });
  runFilters();
});
