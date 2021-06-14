// Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

function objectLength(inputObject) {
    console.log(Object.keys(inputObject).length);

}

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
objectLength(student);