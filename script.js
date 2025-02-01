let submit = document.querySelector('.signup-form');

submit.addEventListener('submit', e=>{
    e.preventDefault();
    console.log(submit.username.value);
    
})

const usernames = 'shande32'
const pattern =/^[a-z]{6,}$/;

let results = pattern.test(usernames);

if(results){
    console.log("test passed");
}
else{
    console.log("Not passed");
    
}