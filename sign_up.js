document.getElementById('signUpForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate password match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Replace with actual API call
    fetch('YOUR_BACKEND_API_URL/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to sign-in page after successful registration
            window.location.href = 'sign_in.html';
        } else {
            alert('Registration failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
