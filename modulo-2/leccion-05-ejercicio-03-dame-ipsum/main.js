"use strict";

//gets html elements
const textEl = document.querySelector(".text");
const textEl2 = document.querySelector(".text-2");

//handler
function getNewParagraph () {
  const content = "<p>Aliquam posuere, nisi non porttitor tempor, orci velit vestibulum lorem, aliquet lobortis mi turpis non turpis. Suspendisse dictum dapibus nibh, vel iaculis quam tempus in. Curabitur sed aliquet lorem, a ullamcorper sem. Fusce justo lacus, sodales sed quam vitae, scelerisque laoreet quam. Quisque in dignissim enim. In et porta dui, quis tincidunt massa. Pellentesque eget vulputate augue.</p>";
  textEl2.innerHTML = content;
  console.log(content);
  return content;
}

//listener on the html element
textEl.addEventListener("mouseover", getNewParagraph);
console.log(content);