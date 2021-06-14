// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 


function deleteProperty(inputObject) {
    console.log(inputObject);
    delete inputObject.rollno;
    console.log(inputObject);


}

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
deleteProperty(student);