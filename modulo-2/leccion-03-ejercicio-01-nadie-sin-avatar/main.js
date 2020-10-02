"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

// gets the img element
const avatarElement = document.querySelector(".user__avatar");
// creates a src attribute
avatarElement.setAttribute("src", userAvatar);
// avatarElement.src = userAvatar;
console.log(avatarElement);
