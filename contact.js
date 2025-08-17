// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Add real-time validation
    const requiredFields = contactForm.querySelectorAll('input[required], select[required]');
    requiredFields.forEach(field => {
        field.addEventListener('blur', validateField);
        field.addEventListener('input', clearFieldError);
    });
});

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Validate all fields
    if (!validateForm(form)) {
        showFormError('Please fill in all required fields correctly.');
        return;
    }
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        console.log('Form data:', data);
        
        // Show success message
        form.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Send data to a form service (example with Formspree, Netlify Forms, etc.)
        // submitToFormService(data);
        
        // Log for demo purposes
        console.log('📧 Contact form submitted:', {
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            phone: data.phone || 'Not provided',
            farm: data.farmName || 'Not specified',
            location: data.location || 'Not specified',
            landSize: data.landSize || 'Not specified',
            interest: data.interest || 'General inquiry',
            timeframe: data.timeframe || 'Not specified',
            message: data.message || 'No additional message',
            newsletter: data.newsletter ? 'Yes' : 'No'
        });
        
    }, 2000); // Simulate network delay
}

function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('input[required], select[required]');
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Check if required field is empty
    if (field.required && !value) {
        showFieldError(field, 'This field is required');
        isValid = false;
    }
    // Validate email format
    else if (field.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address');
        isValid = false;
    }
    // Validate phone format (basic)
    else if (field.type === 'tel' && value && !isValidPhone(value)) {
        showFieldError(field, 'Please enter a valid phone number');
        isValid = false;
    }
    else {
        clearFieldError(field);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    field.style.borderColor = '#ef4444';
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.cssText = 'color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem;';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.style.borderColor = '#e2e8f0';
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function showFormError(message) {
    // Remove existing error
    const existingError = document.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.style.cssText = `
        background: #fef2f2;
        border: 2px solid #fca5a5;
        color: #dc2626;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        text-align: center;
    `;
    errorDiv.textContent = message;
    
    const form = document.getElementById('contactForm');
    form.insertBefore(errorDiv, form.firstChild);
    
    // Scroll to error
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Remove error after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Basic phone validation - accepts various formats
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,15}$/;
    return phoneRegex.test(phone);
}

// Function to submit to external form service (example)
function submitToFormService(data) {
    // Example for Formspree
    /*
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
    */
    
    // Example for Netlify Forms (just add netlify attribute to form)
    /*
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString()
    })
    .then(() => console.log('Form successfully submitted'))
    .catch(error => console.error('Error:', error));
    */
    
    // For now, just log the data
    console.log('Form service submission (placeholder):', data);
}

// Auto-save form data to localStorage
function saveFormData() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem('nativeforest-contact-form', JSON.stringify(data));
}

function loadFormData() {
    const savedData = localStorage.getItem('nativeforest-contact-form');
    if (!savedData) return;
    
    const data = JSON.parse(savedData);
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    Object.keys(data).forEach(key => {
        const field = form.querySelector(`[name="${key}"]`);
        if (field) {
            if (field.type === 'checkbox') {
                field.checked = data[key] === 'on';
            } else {
                field.value = data[key];
            }
        }
    });
}

// Auto-save on input
document.addEventListener('DOMContentLoaded', function() {
    loadFormData();
    
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('input', debounce(saveFormData, 1000));
    }
});

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Clear saved data when form is successfully submitted
function clearSavedFormData() {
    localStorage.removeItem('nativeforest-contact-form');
}