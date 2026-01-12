/*let level = 10;           // Number
let spell = "Fireball";    // String
let isAlive = true;       // Boolean
//let inventory = ["potion","scroll"]; // Array
let hero = { name: "Aria", class: "Mage" }; // Object



let herohealth=110;
if (herohealth<0){

console.log("hero is  defeated ");
}
else {
console.log("hero is not defeated ");

}

let damage=20
for(r=1;r<=5;r++){
herohealth-=damage;
console.log ("round ="+r+"damage="+damage+"herohealth="+herohealth);


}

let mana=100;
let spellCost=20;
while (mana>0){
    mana-=spellCost;
    console.log("mana left="+mana);   


}
*/

//Create an object weapon with name, damage, type.
//Create an array inventory and push 3 items.
//Loop through the array and log each item.

let weapon = { name: "Sword", damage: 50, type: "Melee" };
let inventory = ["potion", "scroll", "ring"];
for(let item of inventory){
  console.log(item);
}



//Traditional function 
let result=addd(5,10);
function addd(a,b){
return a+b;

}
console.log("result="+result);


function multiply(a,b){
    return a*b;   
}
console.log("multiplication="+multiply(5,6));

function divide(a,b){
    return a/b;

}
console.log("division="+divide(20,4));

//Arrow function
let subtract=(a,b)=> {
    return a-b;
}
console.log("subtraction="+subtract(10,4));