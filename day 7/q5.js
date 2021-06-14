// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased 


function cylinderVol(radius, height) {
    let volume = 1;
    const pi = 3.14;
    let cylinder = {
        r: radius,
        h: height
    }
    volume = pi * cylinder.r * cylinder.r * cylinder.h;
    console.log(volume.toFixed(4));


}

let radius = prompt("Enter radius of the cylinder");
let height = prompt("Enter height of the cylinder");

cylinderVol(radius, height);