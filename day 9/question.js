// call, apply and bind

let fullName = {
    firstName: 'Rohan',
    lastName: 'Singh',

}

let completeName = function (city, state) {
    console.log(this.firstName + " " + this.lastName + ' from ' + city + ", " + state);
}

completeName.call(fullName, 'Noida', 'Uttar Pradesh');

let friendName = {
    firstName: 'Devansh',
    lastName: 'Shah'
}

completeName.call(friendName, 'Delhi', 'Delhi');

completeName.apply(friendName, ['Delhi', 'Delhi'])

let myFriendName = completeName.bind(friendName, 'Delhi', 'Delhi');
console.log(myFriendName);
myFriendName();