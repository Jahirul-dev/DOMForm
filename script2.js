let forms = document.querySelector(".signup-form");
let wrongMsg1 = document.querySelector(".wrongMsg1");
let checkValidation = /^[a-zA-Z]{6,12}$/;

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

forms.username.addEventListener("keyup", (e) => {
  //console.log(e.target.value, forms.username.value);

  if (checkValidation.test(e.target.value)) {
    console.log("passed");
    forms.username.setAttribute("class", "success");
  } else {console.log("failed");
  forms.username.setAttribute("class", "error");
  }
});
