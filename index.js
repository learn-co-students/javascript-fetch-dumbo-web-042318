const app = "I don't do much.";

function fetchTest() {
    fetch('https://api.github.com/users/octocat/repos')
    .then(res => res.json())
    .then(json => console.log(json))
}