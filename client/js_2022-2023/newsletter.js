// Base URL
const base_url = "https://edc-iitd-main-site-backend.onrender.com/"

// Contact Form
const contactForm = document.getElementById('NewsletterForm');
const contactLoader = document.getElementById('submitLoader');

contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    contactLoader.classList.add("display");
    const email = document.getElementById('email').value;
    const formData = {
        email: email,
    }
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    }
    const url = `${base_url}newsletter?email=${email}`;
    try {
        const response = await fetch(url, requestOptions);
        if (response.status === 200) {
            swal({
                title: "Message sent successfully",
                icon: "success",
            });
            document.getElementById('email').value = '';
            contactLoader.classList.remove("display");
        } else {
            swal({
                title: "Something went wrong, please try again",
                icon: "info",
            });
            contactLoader.classList.remove("display");
        }
    }
    catch (error) {
        console.log('Error:' + error);
        swal({
            title: "Some Error occurred",
            icon: "error",
        });
        contactLoader.classList.remove("display");
    }
})