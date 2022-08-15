// getting dom Elements

const singUpform = document.getElementById(`singupForm`);
const names = document.getElementById(`name`);
const email = document.getElementById(`email`);
const password = document.getElementById(`password`);
const password2 = document.getElementById(`password2`);
const NamePopup = document.getElementById(`namePopup`);
const thanksPopup = document.getElementById(`ThankYou`);
const passwordPopup = document.getElementById(`passwordPopup`);
const closePopup = document.getElementById(`closePopup`);
const closePopup2 = document.getElementById(`closePopup2`);
const closePopup3 = document.getElementById(`closePopup3`);
const thanks = document.getElementById(`Thanks`);
const chapchaErrorBtn = document.getElementById(`chapchaErrorBtn`);
const chapchaFirstBtn = document.getElementById(`chapchaFirstBtn`);
const first = Math.floor(Math.random() * 10);
const second = Math.floor(Math.random() * 10);
const res = document.getElementById(`result`);
const capchaBtn = document.getElementById(`capchaBtn`);
const successUserName = document.getElementById(`successUser`);
const successUserPassword = document.getElementById(`successPassword`);
const successUserEmail = document.getElementById(`successEmail`);
const frm = document.getElementById(`capcha`);
const RegExpError = document.getElementById(`RegExpError`);
const RegExpErrorBtn = document.getElementById(`RegExpErrorBtn`);

document.getElementById(`one`).innerText = first;
document.getElementById(`two`).innerText = second;

const light = document.getElementById(`light`);
const dark = document.getElementById(`dark`);

dark.addEventListener(`click`, () => {
    document.documentElement.setAttribute("data-theme", "dark");
});
light.addEventListener(`click`, () => {
    document.documentElement.removeAttribute("data-theme", "dark");
});
// getting page height
const documentHeight = document.body.offsetHeight;
// controll popup
function showPopup(el) {
    el.style.transform = "scale(1)";
    el.style.height = `${documentHeight}px`;
}

function popupHandelar(btnId, cardID) {
    btnId.addEventListener(`click`, () => {
        cardID.style.transform = "scale(0)";
    });
}

popupHandelar(closePopup, NamePopup);
popupHandelar(closePopup2, passwordPopup);
popupHandelar(closePopup3, passwordSortPopup);
popupHandelar(thanks, ThankYou);
popupHandelar(chapchaErrorBtn, capchaError);
popupHandelar(chapchaFirstBtn, capchaFirst);
popupHandelar(RegExpErrorBtn, RegExpError);

// capcha

// name valuidation
let t1, t2, t3, t4;

function nameValidator() {
    let nameTrim = names.value.trim();
    var usernameRegex = /^[ A-Za-z0-9_\.]+$/;

    let nameRejExpHandelar = usernameRegex.test(nameTrim);

    if (!nameRejExpHandelar) {
        showPopup(RegExpError);
    } else {
        t4 = true;
    }

    if (nameTrim === "") {
        showPopup(NamePopup);
    } else {
        t1 = true;
    }
}

// password Validation

function passwordValidation(pass1, pass2) {
    let a = pass1.value.toString();
    let b = pass2.value.toString();
    if (!a.localeCompare(b) == 0) {
        showPopup(passwordPopup);
    } else {
        return (t2 = true);
    }
}
// password length checkar
function passwordLenghtChecker(pass1, pass2) {
    let a = pass1.value.toString();
    let b = pass2.value.toString();
    if (a.length < 4 || a.lenght > 12) {
        showPopup(passwordSortPopup);
    } else {
        t3 = true;
    }
}

// form submit lishtener

singUpform.addEventListener(`submit`, (e) => {
    let isCapchaFullfil;
    e.preventDefault();
    const b = first + second;

    let a = res.value;
    if (res.value == "") {
        showPopup(capchaFirst);
    }

    if (a == b) {
        isCapchaFullfil = true;
    } else if (!(a == b)) {
        isCapchaFullfil = false;
    } else {
        console.log(`Hello World`);
    }

    if (isCapchaFullfil) {
        nameValidator();
        passwordLenghtChecker(password, password2);
        passwordValidation(password, password2);

        if (t1 === true && t2 === true && t3 === true && t4 === true) {
            showPopup(thanksPopup);
        }
    } else if (isCapchaFullfil === false && !(res.value == "")) {
        showPopup(capchaError);
    }

    successUserName.innerText = names.value;
    successUserEmail.innerText = email.value;
    successUserPassword.innerText = password.value;
});