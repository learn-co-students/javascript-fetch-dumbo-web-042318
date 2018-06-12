// const app = "I don't do much.";
// fetch('https://api.github.com/user/repos').
//   then(res => res.json()).
//   then(json => console.log(json))

const token = 'e12c62dee8d6ce89f96d0703eb0bb2f473c75c95'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
