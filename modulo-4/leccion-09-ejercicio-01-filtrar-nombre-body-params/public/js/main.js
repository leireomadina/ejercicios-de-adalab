// "use strict";

// post new user

document
  .querySelector(".js-btn-post-new-user")
  .addEventListener("click", () => {
    const inputName = document.querySelector(".js-input-name");
    const inputEmail = document.querySelector(".js-input-email");

    // create body params
    const bodyParams = {
      userName: inputName.value,
      userEmail: inputEmail.value,
    };

    fetch("http://localhost:3006/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyParams),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Server response:", responseData);
        printJson(".js-post-new-user-result", responseData);
      });
  });

// get users data

document.querySelector(".js-btn-get-users").addEventListener("click", () => {
  const inputFilterName = document.querySelector(".js-input-name-filter");
  const inputFilterEmail = document.querySelector(".js-input-email-filter");

  // create body params
  const userBodyParams = {
    filterByName: inputFilterName.value,
    filterByEmail: inputFilterEmail.value
  };

  fetch("http://localhost:3006/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userBodyParams),
  })
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
