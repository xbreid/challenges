const password = "w@567sadA#!Ax";

console.log(
  password.match(/^\0(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
);
