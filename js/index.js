const form = document.querySelector("form");
// const nameField = document.getElementById("name");

function validateField(field) {
    const errorElement = field.parentElement.querySelector("contact-error-message");

    if(!field.validity.valid) {
        console.log("field is invalid:", field.id);
        return false;
    }

    console.log("field is valid:", field.id);
    return true;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // const isValid = validateField(nameField);
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
        console.log("submitting");
    } else {
        console.log("error - not submitting");
    }

});