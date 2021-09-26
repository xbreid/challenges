const password = "w@567sadA#!Ax";

console.log(
  password.match(/^\0(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
);

const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);

console.log(isAbsoluteURL('https://google.com')); // true
console.log(isAbsoluteURL('ftp://www.myserver.net')); // true
console.log(isAbsoluteURL('/foo/bar')); // false