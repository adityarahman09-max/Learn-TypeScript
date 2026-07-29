/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, 
 * and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

import { constants } from "node:buffer";

const friedRice: number=18000;
const mineralWater: number=5000;
const studentCouncil: number=10000;

const totalFood: number= friedRice*3;
const totalDrink: number= mineralWater*2;

console.log("--- TOTAL FOOD PRICE ---");
console.log("Quantity : 3");
console.log("Total : ", totalFood);
console.log();

console.log("--- TOTAL DRINK PRICE ---");
console.log("Quantity : 2");
console.log("Total : ", totalDrink);
console.log();

console.log("--- FINAL PAYMENT ---");
console.log("Total Food : ", totalFood);
console.log("Total Drink : ", totalDrink);
console.log("Total : ", totalFood+totalDrink);
console.log("Student Council Member : Yes")
console.log("Discount : ", studentCouncil)
console.log("Final Payment: ", totalDrink +totalFood-studentCouncil);
console.log("--------------------------")

