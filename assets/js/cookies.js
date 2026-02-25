document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");
  const rejectBtn = document.getElementById("cookie-reject");

  const choice = localStorage.getItem("cookie-consent");

  // If user already accepted → load analytics
  if (choice === "accepted") {
    loadAnalytics();
    banner.style.display = "none";
    return;
  }

  // If user already rejected → hide banner
  if (choice === "rejected") {
    banner.style.display = "none";
    return;
  }

  // ESC key = reject cookies (accessibility)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      localStorage.setItem("cookie-consent", "rejected");
      banner.style.display = "none";
    }
  });

  // Accept button
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookie-consent", "accepted");
    banner.style.display = "none";
    loadAnalytics();
  });

  // Reject button
  rejectBtn.addEventListener("click", () => {
    localStorage.setItem("cookie-consent", "rejected");
    banner.style.display = "none";
  });
});

function loadAnalytics() {
  // Load GA script dynamically
  const gaScript = document.createElement("script");
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-ZPCQYTZLWT";
  gaScript.async = true;
  document.head.appendChild(gaScript);

  // Load inline GA config from template
  const template = document.getElementById("ga-template").textContent;
  const inlineScript = document.createElement("script");
  inlineScript.innerHTML = template;
  document.head.appendChild(inlineScript);
}
