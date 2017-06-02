// 1. You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let user = [ john, pete, mary ];

var usernames = user.map(function(obj){
  return{name: obj.name};
});
usernames;
*/

// 2. Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
/*
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

var usersMapped = users.map(function (obj) {
	return { fullname: obj.name + ' ' + obj.surname, id: obj.id };
});
*/

// 3. Write the function sortByName(users) that gets an array of objects with property name and sorts it.
/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ john, pete, mary ];
var sortByName = arr.sort(function(a,b){
  return a.name > b.name;
});

sortByName;
*/

// 4. Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.
/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function arrAge(){
	var sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i].age;
	}
	return sum / arr.length;
}

arrAge();
*/
