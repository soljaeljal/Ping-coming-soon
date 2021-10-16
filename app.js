
function validateEmail (inputText) {
    let mailFormat = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(inputText.value.match(mailFormat)) {
        return (true)
    } else {
        document.querySelector('#emailForm-invalid').style.display = "block";
        document.querySelector("#text").style.borderColor = "hsl(354, 100%, 66%)";
        document.querySelector("#text").style.borderWidth = "thin";
    return (false);
    }
}

