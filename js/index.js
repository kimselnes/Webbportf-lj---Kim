const form = document.querySelector("form");
// const nameField = document.getElementById("name");

function validateField(field) {
    const errorElement = field.parentElement.querySelector(".contact-error-message");

    if(!field.validity.valid) {
        console.log("field is invalid:", field.id);
        errorElement.textContent = field.dataset.error || "This field is required";
        return false;
    }

    // console.log("field is valid:", field.id);
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
        // Send form data

        form.reset();
        // console.log("submitting");
    } else {
        // console.log("error - not submitting");
        form.querySelector(":invalid").focus();
    }

});

function emailCopy() {
    var copyText = "kimsel1990@gmail.com";
    navigator.clipboard.writeText(copyText);
}
function phoneCopy() {
    var copyText = "0760894025";
    navigator.clipboard.writeText(copyText);
}

function emailSend() {

};