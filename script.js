let submit = document.querySelector('.signup-form');

submit.addEventListener('submit', e=>{
    e.preventDefault();
    console.log(submit.username.value);
    
})

const usernames = 'shande'
const pattern =/^[a-z]{6,}$/;

let results = pattern.test(usernames);
console.log(results);
