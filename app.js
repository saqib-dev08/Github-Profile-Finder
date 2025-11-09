let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let userInp = document.getElementById('username-Inp').value.trim();
let findBtn = document.getElementById('findBtn');
div1.style.display = 'block';
div2.style.display = 'none';

function userProfile(){
div1.style.display = 'none';
div2.style.display = 'block';
console.log(userInp)
fetch("https://api.github.com/users/${userInp}")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((err) => console.log(err))
};