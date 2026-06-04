function handleContactSubmit(event) {
  event.preventDefault();
  const button = event.target.querySelector("button");
  button.textContent = "Sending...";
  setTimeout(() => {
    event.target.reset();
    button.textContent = "Message sent";
    showToast("Message sent successfully. The support team will reply soon.");
    setTimeout(() => button.textContent = "Send message", 1800);
  }, 850);
}

document.addEventListener("DOMContentLoaded", () => {
  setMediaBackdrop(MEDIA.shelfVideo, MEDIA.studyImage);
});
