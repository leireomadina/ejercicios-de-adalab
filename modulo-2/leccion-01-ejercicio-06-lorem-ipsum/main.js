"use strict";

const divClass = document.querySelector("div");
divClass.classList.add("container");

const content =
  '<h1 class="title">Lorem ipsum</h1><img src="http://via.placeholder.com/350x150"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';
divClass.innerHTML = content;
