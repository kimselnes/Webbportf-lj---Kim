// FORM VALIDATION

const form = document.querySelector("form");

function validateField(field) {
    const errorElement = field.parentElement.querySelector(".contact-error-message");

    if(!field.validity.valid) {
        console.log("field is invalid:", field.id);
        errorElement.textContent = field.dataset.error || "This field is required";
        return false;
    }

    errorElement.textContent = "";
    return true;
}

form.querySelectorAll("input, textarea").forEach(input => {
    input.addEventListener("blur", () => {
        validateField(input);
    });
});


form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const fields = form.querySelectorAll("input, textarea");

    fields.forEach(field => {
        console.log(`Checking ${field.id}`);
        const fieldValid = validateField(field);

        if (!fieldValid) {
            isValid = false;
        }
    });

    if (isValid) {
        // Send form data

        form.reset();

    } else {
        form.querySelector(":invalid").focus();
    }

});


// SEND EMAIL FUNCTION

function emailSend() {
    let parms = {
        name : document.getElementById("name").value,
        company : document.getElementById("company").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_ggnujk6", "template_v14okzh", parms).then(alert("Email har skickats till Kim Selnes."));
};


// CLIPBOARD

function emailCopy() {
    let copyText = "kimsel1990@gmail.com";
    navigator.clipboard.writeText(copyText);
}
function phoneCopy() {
    let copyText = "0760894025";
    navigator.clipboard.writeText(copyText);
}



// Active Nav-items

const navLinkElements = document.querySelectorAll(".nav-item-decoration");
const sectionElements = document.querySelectorAll("section");

let currentSection = "home";
window.addEventListener("scroll", () => {
    sectionElements.forEach(sectionEl => {
        if (window.scrollY >= sectionEl.offsetTop - 300) {
            currentSection = sectionEl.id;
        }
    });

    navLinkElements.forEach(navLinkEl => {
       if (navLinkEl.href.includes(currentSection)) {
            document.querySelector(".active").classList.remove("active");
            navLinkEl.classList.add("active");
       } 
    });

});


// Download CV

const cvButton = document.querySelector(".btn-secondary");

cvButton.addEventListener("click", alertCV);
function alertCV() {
    alert("Jag har inget CV ännu :(");
}


// ContactMe Button

const contactButton = document.querySelector(".btn-primary");
const contactSection = document.getElementById('contact');

contactButton.addEventListener("click", goToContactSection);
function goToContactSection() {
    contactSection.scrollIntoView();
}


// Project links

function goToKassaSystem() {
    window.location.href = "https://github.com/kimselnes/KassaSystem---Kim";
}

