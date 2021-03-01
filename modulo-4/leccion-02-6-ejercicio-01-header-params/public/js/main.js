"use strict";

// post new user

document
  .querySelector(".js-btn-header-params")
  .addEventListener("click", () => {
    fetch("http://localhost:3000/user", {
      method: "POST", // o GET, PUT, PATCH...
      headers: {
        soyUnString: "Hola",
        soyUnBooleano: true,
        soyUnObjeto: {
          numero: 12,
          modelo: "Dell",
        },
        soyUnArray: ["Hello", 13],
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
