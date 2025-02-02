let forms = document.querySelector("signup-form");

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(forms.username.value);
});
