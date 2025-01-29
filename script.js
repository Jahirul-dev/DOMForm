let submit = document.querySelector('.signup-form');

submit.addEventListener('submit', e=>{
    e.preventDefault();
    console.log(submit.username.value);
    
})