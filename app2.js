const validator= require('validator') //reclamer le chargement du paquet, valide certaines données.

const isEmail = validator.isEmail('addresse@gmail.fr')
console.log(isEmail)