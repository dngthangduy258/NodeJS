const querystring = require('querystring');

const obj = {name:'John', age: 19};
const objQuerytoString = querystring.stringify(obj);
console.log(objQuerytoString);

const queryStr = 'name=Khang&age=20';
const stringToObj = querystring.parse(queryStr);
console.log(stringToObj.name,stringToObj.age);