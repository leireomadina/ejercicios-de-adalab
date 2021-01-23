// "use strict";

// post new user

document
  .querySelector(".js-btn-post-new-user")
  .addEventListener("click", () => {
    const inputName = document.querySelector(".js-input-name");
    const inputEmail = document.querySelector(".js-input-email");

    // create query params
    const queryParams = `?userName=${inputName.value}&userEmail=${inputEmail.value}`;

    fetch("http://localhost:3500/user" + queryParams, { method: "POST" })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Server response:", responseData);
        printJson(".js-post-new-user-result", responseData);
      });
  });

// get users data

document.querySelector(".js-btn-get-users").addEventListener("click", () => {
  const inputFilterName = document.querySelector(".js-input-name-filter");
  // console.log(inputFilterName);

  // create query params
  const queryParamsFilter = `?filterByName=${inputFilterName.value}`;
  // console.log(queryParamsFilter);

  fetch("http://localhost:3500/users" + queryParamsFilter, {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
      console.log("Server response:", responseData);
      printJson(".js-get-users-result", responseData);
    })
    .catch((error) => console.log(`Ha sucedido un error: ${error}`));
});

// helper

const printJson = (selector, jsonData) => {
  const jsonHtml = JSON.stringify(jsonData, null, 2);
  document.querySelector(selector).innerHTML = jsonHtml;
};
