const MEDIA = {
  heroVideo: "https://videos.pexels.com/video-files/8499665/8499665-hd_1920_1080_30fps.mp4",
  shelfVideo: "https://videos.pexels.com/video-files/8199438/8199438-hd_1920_1080_25fps.mp4",
  archiveVideo: "https://videos.pexels.com/video-files/1580502/1580502-hd_1920_1080_30fps.mp4",
  heroImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1800&q=85",
  studyImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1800&q=85",
  archiveImage: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1800&q=85"
};

  const BOOKS = [
  { 
  id: 1,
  title: "The Psychology of Money",
  author: "Morgan Housel",
  genre: "Finance",
  rating: 4.8,
  mark: "PM",
  cover: "linear-gradient(135deg,#1b4332,#40916c)",
  image: "https://m.media-amazon.com/images/I/41mxvU9Tu6L._SY445_SX342_FMwebp_.jpg",
  syn: "A powerful exploration of how emotions, habits, and behavior shape financial success more than pure intelligence or strategy.",
  pdf: "pdfs/The-Psychology-of-Money-Morgan-Housel.pdf"
},

{ 
  id: 2,
  title: "The Original Illustrated Sherlock Holmes",
  author: "Arthur Conan Doyle",
  genre: "Mystery",
  rating: 4.9,
  mark: "SH",
  cover: "linear-gradient(135deg,#111827,#374151)",
  image: "https://m.media-amazon.com/images/I/91dDv9WOcFL._SY425_.jpg",
  syn: "A classic collection of Sherlock Holmes adventures filled with deduction, suspense, brilliant mysteries, and iconic illustrations.",
  pdf: "pdfs/SherlockHolmesComplete.pdf"
},

{ 
  id: 3,
  title: "Atomic Habits",
  author: "James Clear",
  genre: "Productivity",
  rating: 4.9,
  mark: "AH",
  cover: "linear-gradient(135deg,#093028,#237a57)",
  image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
  syn: "A practical framework for building better habits, breaking bad ones, and achieving remarkable long-term improvement.",
  pdf: "pdfs/Atomic habits.pdf"
},

{ 
  id: 4,
  title: "Five Point Someone",
  author: "Chetan Bhagat",
  genre: "Fiction",
  rating: 4.3,
  mark: "FP",
  cover: "linear-gradient(135deg,#14213d,#3a86ff)",
  image: "https://m.media-amazon.com/images/I/61Sye4MjrzL._SY466_.jpg",
  syn: "A relatable campus story about friendship, pressure, love, and survival inside one of India’s toughest engineering colleges.",
  pdf: "pdfs/Five Point Someone.pdf"
},

{ 
  id: 5,
  title: "The Monk Who Sold His Ferrari",
  author: "Robin Sharma",
  genre: "Motivation",
  rating: 4.6,
  mark: "MF",
  cover: "linear-gradient(135deg,#6a040f,#f48c06)",
  image: "https://m.media-amazon.com/images/I/61OByUf1TfL._SY466_.jpg",
  syn: "An inspiring blend of fiction and life lessons focused on discipline, purpose, mindfulness, and inner fulfillment.",
  pdf: "pdfs/The Monk Who Sold His Ferrari.pdf"
},

{ 
  id: 6,
  title: "The Alchemist",
  author: "Paulo Coelho",
  genre: "Fiction",
  rating: 4.7,
  mark: "AL",
  cover: "linear-gradient(135deg,#7c3aed,#c4b5fd)",
  image: "https://m.media-amazon.com/images/I/617lxveUjYL._SY466_.jpg",
  syn: "A timeless philosophical adventure about following dreams, listening to the heart, and discovering one’s destiny.",
  pdf: "pdfs/The-Alchemist-Paulo-Coelho.pdf"
},

{ 
  id: 7,
  title: "One Hundred Years of Solitude",
  author: "Gabriel García Márquez",
  genre: "Fiction",
  rating: 4.8,
  mark: "OS",
  cover: "linear-gradient(135deg,#264653,#2a9d8f)",
  image: "https://m.media-amazon.com/images/I/81oAEEwxBWL._SY466_.jpg",
  syn: "A masterpiece of magical realism chronicling generations of the Buendía family through love, war, tragedy, and destiny.",
  pdf: "pdfs/One_Hundred_Years_of_Solitude.pdf"
},

{ 
  id: 8,
  title: "Aunt Julia and the Scriptwriter",
  author: "Mario Vargas Llosa",
  genre: "Fiction",
  rating: 4.2,
  mark: "AJ",
  cover: "linear-gradient(135deg,#5f0f40,#9a031e)",
  image: "https://m.media-amazon.com/images/I/51tbpC8liNL._SY445_SX342_QL70_FMwebp_.jpg",
  syn: "A humorous and semi-autobiographical novel that mixes romance, chaos, radio drama, and eccentric storytelling."
},

{ 
  id: 9,
  title: "The Immortals of Meluha",
  author: "Amish",
  genre: "Fantasy",
  rating: 4.6,
  mark: "IM",
  cover: "linear-gradient(135deg,#3a0ca3,#7209b7)",
  image: "https://m.media-amazon.com/images/I/818bGgNn0EL._SY466_.jpg",
  syn: "A mythological fantasy that reimagines Lord Shiva as a legendary hero destined to change an ancient civilization.",
  pdf: "pdfs/The Immortals of Meluha.pdf"
},

{ 
  id: 10,
  title: "The Subtle Art of Not Giving a F*ck",
  author: "Mark Manson",
  genre: "Self-Help",
  rating: 4.5,
  mark: "SA",
  cover: "linear-gradient(135deg,#7f1d1d,#dc2626)",
  image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
  syn: "A brutally honest self-help book that challenges toxic positivity and teaches the value of choosing struggles wisely.",
  pdf: "pdfs/the-subtle-art-of-not-giving-a-fk.pdf"
},

{ 
  id: 11,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
  genre: "Fantasy",
  rating: 4.8,
  mark: "HP",
  cover: "linear-gradient(135deg,#1d3557,#457b9d)",
  image: "https://m.media-amazon.com/images/I/81+7iHhzaML._SY466_.jpg",
  syn: "Harry returns to Hogwarts where dark secrets, mysterious attacks, and the hidden Chamber of Secrets threaten the school.",
  pdf: "pdfs/Harry Potter and the Chamber of Secrets.pdf"
},

{ 
  id: 12,
  title: "The Diary of a Young Girl",
  author: "Anne Frank",
  genre: "Biography",
  rating: 4.9,
  mark: "DG",
  cover: "linear-gradient(135deg,#6d597a,#b56576)",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1560816565i/48855.jpg",
  syn: "Anne Frank’s deeply moving diary captures hope, fear, and resilience while hiding during World War II.",
  pdf: "pdfs/Anne-Frank-The-Diary-Of-A-Young-Girl.pdf"
},

{ 
  id: 13,
  title: "The Da Vinci Code",
  author: "Dan Brown",
  genre: "Thriller",
  rating: 4.7,
  mark: "DV",
  cover: "linear-gradient(135deg,#7f1d1d,#b91c1c)",
  image: "https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg",
  syn: "A fast-paced mystery thriller involving secret societies, hidden symbols, ancient conspiracies, and historical puzzles.",
  pdf: "pdfs/thedavincicode-danbrown.pdf"
},

{ 
  id: 14,
  title: "Adventures of Huckleberry Finn",
  author: "Mark Twain",
  genre: "Adventure",
  rating: 4.5,
  mark: "HF",
  cover: "linear-gradient(135deg,#283618,#606c38)",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Huckleberry_Finn_book.JPG/500px-Huckleberry_Finn_book.JPG",
  syn: "A classic coming-of-age adventure following Huck and Jim as they journey down the Mississippi River seeking freedom.",
  pdf: "pdfs/The Adventures of Huckleberry Finn.pdf"
},

{ 
  id: 15,
  title: "Pride and Prejudice",
  author: "Jane Austen",
  genre: "Romance",
  rating: 4.8,
  mark: "PP",
  cover: "linear-gradient(135deg,#9d4edd,#c77dff)",
  image: "https://m.media-amazon.com/images/I/712P0p5cXIL._SY466_.jpg",
  syn: "A witty and elegant romance exploring love, social class, misunderstandings, and personal growth in 19th-century England.",
  pdf: "pdfs/Pride-Prejudice.pdf"
},

{ 
  id: 16,
  title: "The Prophet",
  author: "Kahlil Gibran",
  genre: "Philosophy",
  rating: 4.7,
  mark: "TP",
  cover: "linear-gradient(135deg,#003049,#669bbc)",
  image: "https://m.media-amazon.com/images/I/51lo-LReKvL._SY445_SX342_FMwebp_.jpg",
  syn: "A poetic philosophical work offering timeless reflections on love, freedom, work, joy, sorrow, and the human spirit.",
  pdf: "pdfs/The_Prophet.pdf"
},

{ 
  id: 17,
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  genre: "Fantasy",
  rating: 4.9,
  mark: "PS",
  cover: "linear-gradient(135deg,#240046,#5a189a)",
  image: "https://m.media-amazon.com/images/I/81m9fP+LIPL._SY466_.jpg",
  syn: "The magical beginning of Harry Potter’s journey as he discovers Hogwarts, friendship, and the truth about his past.",
  pdf: "pdfs/harry-potter-and-the-philosophers-stone.pdf"
},

{ 
  id: 18,
  title: "Love in the Time of Cholera",
  author: "Gabriel García Márquez",
  genre: "Romance",
  rating: 4.6,
  mark: "LC",
  cover: "linear-gradient(135deg,#780000,#c1121f)",
  image: "https://m.media-amazon.com/images/I/711nFirM9SL._SY466_.jpg",
  syn: "A beautifully written love story about patience, longing, aging, and devotion that spans across decades.",
  pdf: "pdfs/LoveInTheTimeOfCholera.pdf"
},

{ 
  id: 19,
  title: "Angels & Demons",
  author: "Dan Brown",
  genre: "Thriller",
  rating: 4.7,
  mark: "AD",
  cover: "linear-gradient(135deg,#1b263b,#415a77)",
  image: "https://upload.wikimedia.org/wikipedia/en/5/5f/AngelsAndDemons.jpg",
  syn: "A gripping thriller where Robert Langdon races against time to stop a deadly conspiracy targeting the Vatican.",
  pdf: "pdfs/angels_and_demons.pdf"
},

{ 
  id: 20,
  title: "The Kite Runner",
  author: "Khaled Hosseini",
  genre: "Drama",
  rating: 4.9,
  mark: "KR",
  cover: "linear-gradient(135deg,#0f4c5c,#2c7da0)",
  image: "https://m.media-amazon.com/images/I/41fei15J3JL._SY445_SX342_QL70_FMwebp_.jpg",
  syn: "An emotional story of friendship, betrayal, guilt, redemption, and survival set against Afghanistan’s changing history.",
  pdf: "pdfs/The-Kite-Runner.pdf"
},
];

function byId(id) {
  return document.getElementById(id);
}

function setMediaBackdrop(videoUrl, imageUrl) {
  const backdrop = byId("mediaBackdrop");
  if (!backdrop) return;
  backdrop.style.setProperty("--fallback-image", `url("${imageUrl}")`);
  backdrop.innerHTML = `<video autoplay muted loop playsinline poster="${imageUrl}"><source src="${videoUrl}" type="video/mp4"></video>`;
}

function setStillBackdrop(imageUrl) {
  const backdrop = byId("mediaBackdrop");
  if (!backdrop) return;
  backdrop.style.setProperty("--fallback-image", `url("${imageUrl}")`);
  backdrop.innerHTML = "";
}

function setupNavigation() {
  const nav = document.querySelector(".navbar");
  const toggle = document.querySelector(".nav-toggle");
  if (!nav || !toggle) return;
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

function isLoggedIn() {
  return Boolean(localStorage.getItem("lib_user"));
}

function getUser() {
  return JSON.parse(localStorage.getItem("lib_user") || "{}");
}

function setUser(userObj) {
  localStorage.setItem("lib_user", JSON.stringify(userObj));
}

function logoutUser() {
  localStorage.removeItem("lib_user");
  window.location.href = "login.html";
}

function requireLogin() {
  if (!isLoggedIn()) window.location.href = "login.html";
}

function renderAuthBlock() {
  const block = byId("navAuthBlock");
  if (!block) return;
  block.innerHTML = isLoggedIn()
    ? `<button class="btn btn-danger" onclick="logoutUser()">Logout</button>`
    : `<a class="btn btn-primary" href="login.html">Sign in</a>`;
}

function getFavourites() {
  return JSON.parse(localStorage.getItem("lib_favourites") || "[]");
}

function saveFavourites(items) {
  localStorage.setItem("lib_favourites", JSON.stringify(items));
}

function isFavourite(id) {
  return getFavourites().some((book) => book.id === id);
}

function toggleFavourite(book) {
  const favs = getFavourites();
  const index = favs.findIndex((item) => item.id === book.id);
  if (index === -1) {
    favs.push(book);
    saveFavourites(favs);
    showToast(`Saved "${book.title}" to favourites.`);
    return true;
  }
  favs.splice(index, 1);
  saveFavourites(favs);
  showToast(`Removed "${book.title}" from favourites.`);
  return false;
}

function showToast(message) {
  let container = byId("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function buildBookCard(book, compact = false, showFavourite = true) {
  const fav = isFavourite(book.id);
  const view = isLoggedIn() && !compact ? `<a class="btn btn-ghost" href="book-detail.html?id=${book.id}">View book</a>` : "";
  const encoded = JSON.stringify(book).replace(/"/g, "&quot;");
  const favouriteButton = showFavourite
    ? `<button class="fav-btn" onclick="handleFavouriteClick(${encoded}, this)" aria-label="Toggle favourite">${fav ? "*" : "+"}</button>`
    : "";
  return `
    <article class="book-card" data-reveal>
      <div class="book-cover" style="--image:url('${book.image}')"></div>
      <div class="book-body">
        <div class="book-meta">
          <a class="book-title" href="book-detail.html?id=${book.id}">${book.title}</a>
          ${favouriteButton}
        </div>
        <div class="book-author">By ${book.author}</div>
        <p class="muted">${book.syn.slice(0, 112)}...</p>
        <div class="book-meta">
          <span class="pill">${book.genre}</span>
          <span class="pill">Rating ${book.rating}</span>
        </div>
        ${view}
      </div>
    </article>`;
}

function handleFavouriteClick(book, button) {
  const added = toggleFavourite(book);
  button.textContent = added ? "*" : "+";
}

function initReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach((target) => observer.observe(target));
}

function initTilt() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".book-card").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 6}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    window.AOS.init({
      duration: 650,
      once: true,
      easing: "ease-out-cubic",
      disableMutationObserver: true
    });
  }
  setupNavigation();
  renderAuthBlock();
  initReveal();
  setTimeout(initTilt, 250);
});
