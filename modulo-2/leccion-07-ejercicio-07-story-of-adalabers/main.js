"use strict";

const adalabers = [
  {
    name: "María",
    age: 29,
    job: "diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    job: "ingeniera química",
  },
  {
    name: "Susana",
    age: 34,
    job: "periodista",
  },
  {
    name: "Rocío",
    age: 25,
    job: "actriz",
  },
  {
    name: "Inmaculada",
    age: 21,
    job: "diseñadora",
  },
];

// let age;
let age = 0;
let media;

function countAdalabers() {
  console.log(`El número de adalabers en el listado es ${adalabers.length}.`);
}

countAdalabers();

function averageAge() {
  for (let i = 0; i < adalabers.length; i++) {
    age += adalabers[i].age;
    media = age / adalabers.length;
  }
  return media;
}

console.log(`La edad media de las adalabers es ${media}.`);
averageAge();

/*
let total = 0;
let avg;

function averageAge() {
  for (let i = 0; i < adalabers.length; i++) {
    let age = adalabers[i].age;
    total = total + age;
    avg = total / adalabers.length;
  }
  return avg;
}

console.log(`La edad media de las adalabers es ${averageAge()}`);

*/
