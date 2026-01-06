// Show Password toggle
document.getElementById('showPassword').addEventListener('change', function() {
    const passwordInput = document.getElementById('password');
    passwordInput.type = this.checked ? 'text' : 'password';
});

// Form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const alertMessage = document.getElementById('alert-message');
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Clear previous alert
    alertMessage.textContent = '';
    alertMessage.classList.remove('show', 'error');
    
    // Validate email
    if (!email || !emailRegex.test(email)) {
        showAlert('Please enter a valid email address');
        emailInput.focus();
        return;
    }
    
    // Validate password
    if (!password) {
        showAlert('Please enter your password');
        passwordInput.focus();
        return;
    }
    
    // If validation passes, you can proceed with form submission
    // For now, we'll just clear the form or show success
    // Uncomment the line below if you want to submit the form
    // this.submit();
});

function showAlert(message) {
    const alertMessage = document.getElementById('alert-message');
    alertMessage.textContent = message;
    alertMessage.classList.add('show', 'error');
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        alertMessage.classList.remove('show');
    }, 3000);
}

// Button click animations
document.querySelectorAll('.login-button, .signup-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

