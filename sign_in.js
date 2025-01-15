document.getElementById('signInForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Replace with actual API call
    fetch('YOUR_BACKEND_API_URL/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to navigation page
            window.location.href = 'navigation.html';
        } else {
            alert('Invalid credentials');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
