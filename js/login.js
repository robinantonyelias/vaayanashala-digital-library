function switchAuth(mode) {
  document.querySelectorAll("[data-auth-tab]").forEach((tab) => tab.classList.toggle("active", tab.dataset.authTab === mode));
  document.querySelectorAll("[data-auth-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.authPanel === mode));
}

function processAuth(event, mode) {
  event.preventDefault();
  const email = mode === "login" ? byId("loginEmail").value : byId("signupEmail").value;
  const name = mode === "login" ? "Scholar" : byId("signupName").value;
  setUser({ email, name, accessRank: "Verified Scholar" });
  showToast(mode === "login" ? "Session initialized. Welcome back." : "Profile created. Preparing your dashboard.");
  setTimeout(() => window.location.href = "dashboard.html", 900);
}

document.addEventListener("DOMContentLoaded", () => {
  setMediaBackdrop(MEDIA.archiveVideo, MEDIA.archiveImage);
});
