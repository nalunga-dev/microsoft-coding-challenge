const form = document.getElementById("inputForm");
const nameInput = document.getElementById("nameInput");
const passwordInput = document.getElementById("nameInput");
const emailInput = document.getElementById("EmailInput");
const addBtn = document.querySelector(".MAILA");
const removeBtn = document.querySelector(".maili");
const formContainner = document.querySelector(".look ");
const mainContainner = document.querySelector(".outLook ");
// console.log(formContainner, mainContainner);
// console.log(removeBtn, addBtn);
// console.log(form, nameInput, passwordInput, emailInput);

addBtn.addEventListener("click", function () {
  console.log("button clicked succesfully");
  mainContainner.style.visibility = "visible";
  formContainner.style.top = "37%";
  formContainner.style.left = "50%";
});

removeBtn.addEventListener("click", function () {
  mainContainner.style.display = "none";
  // form.style.top = "-90";
  console.log("successfully clicked");
  // alert("Successfully saved");
});

const userStore = [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const userInput = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  userStore.push(userInput);
  localStorage.setItem("userData", JSON.stringify(userStore));
});
