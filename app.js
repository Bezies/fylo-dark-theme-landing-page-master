const button = document.querySelector("#started");
const mail = document.querySelector("#mail");
const error = document.querySelector("#error");



function validateMail(mail) {
    let regxMail = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (regxMail.test(mail)) {
        return true
    } else {
        return false
    }
}


button.addEventListener("click", () => {
    if (mail.value < 1) {
        error.innerHTML = "Can't be empty"
    } else if (validateMail(mail.value) === false) {
        error.innerHTML = "Please enter a valid email adress"
    } else {
        error.innerHTML = ""
    }
})