let num1 = 76;
let num2 = 24;

let action = "add";

if(action === "add"){
    console.log("Addition: ", num1+num2);
}
else if(action === "subtract") {
    console.log("Subtraction: ", num1 - num2);
}
else if(action === "multiply") {
    console.log("Multiplication: ", num1 * num2);
}
else if(action === "divide") {
    console.log("Division: ", num1 / num2);
}
else {
    console.log("Invalid action");
}
