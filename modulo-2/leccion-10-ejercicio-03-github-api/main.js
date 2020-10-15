"use strict";

const btn = document.querySelector(".js-btn");

btn.addEventListener("click", getGithubUser);

function getGithubUser() {
  const username = document.querySelector(".js-user").value;
  
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      const name = document.querySelector("js-name");
      const img = document.querySelector("js-img");
      const repo = document.querySelector("js-repo");
      name.innerHTML = data.login;
      img.src = data.avatar_url;
      repo.innerHTML = data.public_repos;
    });
}

// getGithubUser();