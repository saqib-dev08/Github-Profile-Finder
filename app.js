let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let userInp = document.getElementById('username-Inp');
let userName = userInp.value.trim();
let findBtn = document.getElementById('findBtn');
div1.style.display = 'block';
div2.style.display = 'none';

function userProfile(event) {
    event.preventDefault();

    console.log(userInp.value, "input");
    fetch(`https://api.github.com/users/${userInp.value}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let avatar = data.avatar_url;
            let name = data.name;
            let bio = data.bio;
            let followers = data.followers;
            let following = data.following;
            let repositories = data.public_repos;
            let url = data.url;

            console.log(avatar, "avatar")
            console.log(name, "name")
            console.log(bio, "bio")
            console.log(followers, "followers")
            console.log(following, "following")
            console.log(repositories, "repositories")
            console.log(url, "url")

        })
        .catch((err) => console.log(err))



    /*
    div1.style.display = 'none';
    div2.style.display = 'block';*/
};