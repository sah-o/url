const ADMIN_PASSWORD = "admin123";

function verifyAdmin() {
    const passwordInput = document.getElementById("adminPassword").value;
    const adminLogin = document.getElementById("adminLogin");
    const adminContent = document.getElementById("adminContent");

    if (passwordInput === ADMIN_PASSWORD) {
        adminLogin.style.display = "none";
        adminContent.style.display = "block";
        loadUserData();
    } else {
        alert("Incorrect password! Access denied.");
    }
}

function loadUserData() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const dataTable = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
            data.forEach(item => {
                const row = dataTable.insertRow();
                row.insertCell(0).textContent = item.ip;
                row.insertCell(1).textContent = item.browser;
                row.insertCell(2).textContent = item.date;
            });
        })
        .catch(error => console.error("Error loading data:", error));
}
