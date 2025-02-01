let submit = document.getElementById('submit');

submit.addEventListener('click', e=>{
    e.preventDefault();
    console.log(document.getElementById('username').value);
    
})
