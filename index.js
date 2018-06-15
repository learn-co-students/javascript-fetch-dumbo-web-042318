const app = "I don't do much.";

const token = '027d85f34e94061557e9acb481dd7932d9968da9'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
