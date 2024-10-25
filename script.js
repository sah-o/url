document.getElementById("agreeButton").addEventListener("click", () => {
    localStorage.setItem("consentGiven", true);
    document.getElementById("consentModal").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
});

document.getElementById("declineButton").addEventListener("click", () => {
    alert("You need to provide consent to proceed.");
    window.location.href = "https://www.example.com";
});

function generateURL() {
    const customUrl = document.getElementById("customUrl").value || "default-link";
    const fullUrl = `redirect.html?url=${customUrl}`;
    document.getElementById("generatedUrl").innerHTML = `Generated URL: <a href="${fullUrl}" target="_blank">${fullUrl}</a>`;
}
