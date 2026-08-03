/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:       
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

const Passenger: string = "Fajar Nugroho";
const onlineCheckIn: boolean = true;
const cabinClass: string = "Economy Class";
const baggageWeight: number = 24;

console.log(`Passenger Name : ${Passenger}`);
console.log(`Online Check In : ${onlineCheckIn}`);
console.log(`Cabin Class : ${cabinClass}`);
console.log(`Baggage Weight :${baggageWeight} KG`)

if (onlineCheckIn == true) {
    if (baggageWeight > 20) {
        if (cabinClass === "Bussiness Class") {
            console.log("Extra Baggae Allowed");
        } else {
            console.log("Additional Baggage Fee Required");
        }
    } else {
        console.log("Proceed to Boarding Pass Printing");
    }
} else {
    console.log("Please Complete Online Check In First");
}   
