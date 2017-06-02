// 1. Write the code, one line for each action:

let user = {
  name: "John",
  surname: "Smith",
  name: "Pete",
};
delete user.name;

user;

// 2. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
let schedule = {};

function isEmpty(obj){
 for(let key in obj){
   return false;
 }
 return true;
}

isEmpty(schedule);

// 3. Is it possible to change an object declared with const, how do you think?

const user2 = {
  name: "John"
};

// does it work?
user.name = "Pete";// Ys, it is possible

// 4. Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu){
  for(let key in menu){
    if(typeof menu[key] == 'number'){
      menu[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
