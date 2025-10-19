/*
Description:

You are tasked with implementing a simple flight booking system in JavaScript.
There are 5 flights, numbered 1 through 5, and each flight has 5 seats labeled A through E.
You must implement a function that attempts to book a seat for a passenger on a given flight.
Seats are assigned on a first-come, first-served (FCFS) basis — meaning the first passenger to book a seat on a flight gets the first available seat.


Behavior & Constraints:

If flightNumber is not between 1 and 5 (inclusive), throw an Error with a suitable message.
If passengerName is empty (""), undefined, or null, throw an Error with a suitable message.

Each flight can have a maximum of 5 passengers — one per seat (A–E).
If a flight is already fully booked, throw an Error stating that the flight is full.

When a booking is successful:
Return the confirmation number. Confirmation number consists of flightNumber + seatNumber
*/ 

const bookedSeats = new Map();
// 1- 1
// 2- 2
// 3- 5

const seats = ['', 'A', 'B', 'C', 'D', 'E'];

function bookTicket(passengerName, flightNumber){
    if(isNaN(flightNumber) || !Number.isInteger(flightNumber) ||(flightNumber < 0 || flightNumber >5))
        throw new Error("Booking Error- Flight Number");
    if(!passengerName)
        throw new Error("Booking Error- Passenger Name");
    let nextSeatNumber = 1;
    let totalSeatsBooked = bookedSeats.get(flightNumber);
    if(totalSeatsBooked){
        nextSeatNumber = totalSeatsBooked+1;
        if(nextSeatNumber > 5 )
            throw new Error("Booking Error- Flight full");
    }

    bookedSeats.set(flightNumber, nextSeatNumber);
    return flightNumber + seats[nextSeatNumber];
}
console.log("Starting to book tickets");
console.log(bookTicket("Alex", 1));
console.log(bookTicket("Alex", 1));
console.log(bookTicket("Alex", 1));
console.log(bookTicket("Alex", 1));
console.log(bookTicket("Alex", 1));
try{
    console.log("Errors with flight full");
    bookTicket("Alex", 1)
}catch(err){
    console.error(err.message);
}

console.log("Errors with invalid passenger name");
try{
    bookTicket("", 2)
}catch(err){
    console.error(err.message);
}
try{
    bookTicket(null, 2)
}catch(err){
    console.error(err.message);
}
try{
    bookTicket(undefined, 2)
}catch(err){
    console.error(err.message);
}

console.log("Errors with invalid flight number");
try{
    bookTicket("Alex", -2)
}catch(err){
    console.error(err.message);
}
try{
    bookTicket("Alex", 0)
}catch(err){
    console.error(err.message);
}
try{
    bookTicket("Alex", 6)
}catch(err){
    console.error(err.message);
}
try{
    bookTicket("Alex", 1.2)
}catch(err){
    console.error(err.message);
}