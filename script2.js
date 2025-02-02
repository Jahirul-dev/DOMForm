let forms = document.querySelector(".signup-form");

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(forms.username.value);

  let FormsData = forms.username.value;
  let checkValidation = /^[a-zA-Z]{6,12}$/;

  if (checkValidation.test(FormsData)) {
    console.log("Valid");
  } else {
    console.log("Not valid");
  }
});
