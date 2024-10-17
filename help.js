document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("help-form");
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send this data to a server
        // For now, we'll just log it and show an alert
        console.log('Form submitted:', { name, email, message });
        
        alert('Thank you for reaching out. We will get back to you soon!');
        form.reset();
    });

    // Add animation to form inputs
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
        });
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add hover effect to emergency contact items
    const contactItems = document.querySelectorAll('.emergency-contact li');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});