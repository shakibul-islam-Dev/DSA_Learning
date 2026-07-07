//wirte a programm that can reverse a given string. the solution sohould accourately preserve the chracter oreder,including whitespace and special characters, while maintaining case sensitivity.
//in addition,the solution should string os varying lengths,
//  exap: str = 'I love Programmin in JavaScript

//output:tpircSavaJ ni nimmargorP evol I

let str = "I love Programmin in JavaScript";
let revStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  revStr += str.charAt(i);
}
console.log(revStr);
