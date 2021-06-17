let outerBox = document.querySelector('.outer-box');
// console.log(outerBox);
const defaultWhite = [
    98, 99, 115, 116, 117, 118, 132, 133, 134, 135, 136, 137, 149, 150, 152,
    153, 155, 156, 167, 168, 169, 170, 171, 172, 173, 174, 187, 190, 204, 206,
    207, 209, 221, 223, 226, 228,
];

function innerBox() {
    let div = document.createElement('div');
    div.style.height = '20px';
    div.style.width = '20px';
    div.style.border = '1px solid #ff6f61';
    // div.style.margin = '1px';
    div.style.backgroundColor = 'rgb(226, 78, 63)';
    div.className = "inside-box";
    return div;


}


for (let i = 0; i < 306; i++) {
    outerBox.appendChild(innerBox());
}

outerBox.addEventListener('click', e => {
    let color = e.target.style.backgroundColor;
    let borderColor = e.target.style.borderColor;
    console.log(color, borderColor);
    if (color === 'rgb(226, 78, 63)') {
        color = 'white';
        borderColor = 'white';
    } else {
        color = 'rgb(226, 78, 63)';
        borderColor = '#ff6f61';
    }
    e.target.style.backgroundColor = color;
    e.target.style.borderColor = borderColor;


})

const insideBox = document.querySelectorAll(".inside-box");

for (let i = 0; i < 400; i++) {
    if (defaultWhite.includes(i)) {
        insideBox[i].style.backgroundColor = "white";
        insideBox[i].style.borderColor = "white";
    }
}


insideBox.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        box.style.opacity = "0.9";
    });
});

insideBox.forEach((box) => {
    box.addEventListener("mouseleave", () => {
        box.style.opacity = "1";
    });
});