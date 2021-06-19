let bookedSeats = document.querySelector('.booked-seats');
let remainingSeats = document.querySelector('.remaining-seats');
let innerBox = document.querySelectorAll('.inner-box');

let bookedSeatsValue = 0;
let remainingSeatsValue = innerBox.length;

bookedSeats.innerText = bookedSeatsValue;
remainingSeats.innerText = remainingSeatsValue;

innerBox.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('seat-added');
        box.classList.contains('seat-added') ? addSeat() : removeSeat()
    })
})

const addSeat = () => {
    bookedSeatsValue += 1;
    remainingSeatsValue -= 1;
    bookedSeats.innerText = bookedSeatsValue;
    remainingSeats.innerText = remainingSeatsValue;
}

const removeSeat = () => {
    bookedSeatsValue -= 1;
    remainingSeatsValue += 1;
    bookedSeats.innerText = bookedSeatsValue;
    remainingSeats.innerText = remainingSeatsValue;
}