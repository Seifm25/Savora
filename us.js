const contactForm = document.querySelector('.contact-form');
const submitBtn = contactForm.querySelector('.btn-submit');

contactForm.onsubmit = (event) => {
    event.preventDefault();

    submitBtn.innerText = "Sending...";
    submitBtn.style.opacity = "0.7";
    submitBtn.style.pointerEvents = "none";

    setTimeout(() => {
        submitBtn.innerText = "Send Message";
        submitBtn.style.opacity = "1";
        submitBtn.style.pointerEvents = "auto";

        showSuccessAlert();

        contactForm.reset();

    }, 2000);
}

function showSuccessAlert() {
    const alertBox = document.createElement('div');
    alertBox.className = 'success-alert';
    alertBox.innerHTML = `
        <div class="alert-content">
            <i class="fa-solid fa-circle-check"></i>
            <h3>Success!</h3>
            <p>Your message has been sent successfully.</p>
        </div>
    `;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.style.animation = "fadeOut 0.5s ease forwards";
        setTimeout(() => alertBox.remove(), 500);
    }, 3000);
}