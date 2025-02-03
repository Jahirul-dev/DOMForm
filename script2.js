let forms = document.querySelector(".signup-form");
let wrongMsg1 = document.querySelector(".wrongMsg1");

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(forms.username.value);

  let FormsData = forms.username.value;
  let checkValidation = /^[a-zA-Z]{6,12}$/;

  if (checkValidation.test(FormsData)) {
    wrongMsg1.textContent = "Valid!!";
    wrongMsg1.style.color = "green";
  } else {
    wrongMsg1.textContent = "Not Valid!!";
    wrongMsg1.style.color = "red";
  }
});
