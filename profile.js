// profile.js
window.onload = function() {
    fetchUserProfile();
}

function fetchUserProfile() {
    // Simulate fetching user data
    const user = {
        name: "Deepak Kumar",
        email: "deepak@example.com",
        history: ["Device 1: OK", "Device 2: Low Battery"]
    };

    document.getElementById("user_name").innerText = user.name;
    document.getElementById("user_email").innerText = user.email;
    const historyList = document.getElementById("user_history");
    user.history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}
