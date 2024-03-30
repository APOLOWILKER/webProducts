const deployUrl = "https://back-end-produtos-git-main-apolowilkers-projects.vercel.app/";
const baseUrl = "http://localhost:3000" || deployUrl;

fetch(`${baseUrl}/login/users`)
.then(response => response.json())
.then(data => console.log(data))
