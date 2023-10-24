const accountId = 1445579;
let accountEmail = "ikshit@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";

let accountState;

// accountId = 2; //Not Allowed in Javascript
accountEmail = "hc@hc.com";
accountPassword = "89458";
accountCity = "Kanpur";

/*
Never Ever use var Keyword for creating Variables in Industry Projects
Beacause of the Issue in Block Scope and Functional Scope.
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);

console.log(accountState);