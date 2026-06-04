let selectedPlan = null;

function selectPlan(planName, price, period, element) {
  // Require login to select a plan
  if (!isLoggedIn()) {
    showToast("Please sign in to choose a membership plan.");
    setTimeout(() => window.location.href = "login.html", 1500);
    return;
  }

  // Remove selection from all plans
  document.querySelectorAll('.selectable-plan').forEach(el => el.classList.remove('selected'));
  
  // Add selection to the clicked plan
  element.classList.add('selected');
  selectedPlan = { name: planName, price: price };

  // Show the payment simulation section and scroll to it
  const paymentSection = document.getElementById('payment-simulation');
  paymentSection.style.display = 'block';
  
  // Update payment details
  document.getElementById('selectedPlanTitle').textContent = `Upgrade to ${planName}`;
  document.getElementById('selectedPlanPrice').textContent = `Total: $${price} / ${period}`;

  // Scroll to payment section smoothly
  paymentSection.scrollIntoView({ behavior: 'smooth' });
}

function simulatePayment(event) {
  event.preventDefault();
  
  if (!selectedPlan) {
    showToast("Please select a plan first.");
    return;
  }

  const payButton = document.getElementById('payButton');
  const originalText = payButton.textContent;
  
  // Simulate processing
  payButton.disabled = true;
  payButton.textContent = "Processing...";

  setTimeout(() => {
    // Payment successful
    payButton.textContent = "Payment Successful!";
    payButton.style.background = "var(--good)";
    payButton.style.color = "#000";
    
    // Update user access rank
    const user = getUser();
    user.accessRank = `${selectedPlan.name} Member`;
    setUser(user);

    showToast(`Payment of $${selectedPlan.price} successful. You are now a ${selectedPlan.name} Member!`);

    // Redirect to dashboard
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 2000);
  }, 1500);
}

document.addEventListener("DOMContentLoaded", () => {
  setMediaBackdrop(MEDIA.heroVideo, MEDIA.heroImage);
});
