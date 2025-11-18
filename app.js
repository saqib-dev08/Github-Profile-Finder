let div1 = document.getElementById('div1');
let profile = document.getElementById('profile');
let userInp = document.getElementById('username-Inp');
let userName = userInp.value.trim();
let findBtn = document.getElementById('findBtn');
let error = document.getElementById('error');
div1.style.display = 'block';
profile.style.display = 'none';

function userProfile(event) {
    event.preventDefault();

    console.log(userInp.value, "input");
    fetch(`https://api.github.com/users/${userInp.value}`)
        .then((response) => response.json())

        .then((data) => {
            console.log(data)
            let msg = data.message;

            if (!msg) {

                div1.style.display = 'none';
profile.style.display = 'block';
                profile.innerHTML = 
                 ` <div id="avatar">
            <img src= "${data.avatar_url}" alt="avatar">
        </div>
        <div id="name">
            <h4>Name: <p>${data.name}</p></h4>
        </div>
        <div id="bio">
            <h4>Bio: <p>${data.bio || 'No bio available.'}</p></h4>
        </div>
        <div id="followers-following">
            <div id="followers">
                <h4>Followers: <p> ${data.followers}</p></h4>
            </div>
            <div id="following">
                <h4>Following: <p>${data.following}</p></h4>
            </div>
        </div>
        <div id="repos">
            <h4>Repositories: <p>${data.public_repos || 'No public repos found!'}</p> </h4>
        </div>
        <div id="url">
            <h4>Profile URL: <p><a href="${data.html_url}" target="_blank">${data.html_url}</a></p></h4>
        </div> ` } 

        })
        .catch((err) => { 
             if(!userInp.value){
         error.style.display = 'block';
         error.innerHTML = 'Fill the required field first!'
                userInp.style.border = '1px solid red';
    }else{
            error.style.display = 'block';
         error.innerHTML = 'Incorrect Username!'
                userInp.style.border = '1px solid red';
            };
            })

};