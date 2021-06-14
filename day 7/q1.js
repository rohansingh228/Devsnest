function listProperties(inputObject) {
    // for (let item in inputObject) {
    //     console.log(item, ',');
    // }    
    console.log(Object.keys(inputObject).join(","));
}
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
listProperties(student);



// Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno