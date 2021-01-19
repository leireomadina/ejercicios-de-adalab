const _ = require("lodash");

const students = [
  {
    name: 'Sofía',
    promo: 'k'
  },
  {
    name: 'María',
    promo: 'l'
  },
  {
    name: 'Lucía',
    promo: 'j'
  },
  {
    name: 'Julia',
    promo: 'l'
  }
];

const orderedStudentsList = _.orderBy(students, ["promo", "name"]);
console.log(orderedStudentsList);