const app = "I don't do much.";

  const token = 'f115890e10241c1a33f6e31f46390178d2c515ad'
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
