/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const roomPPN: number= 650000;
const nightStayed: number= 4;
const serviceCharge: number= 120000;
const tax: number= 11/100;
const vipMember: boolean= true;
const discVIP: number = 11/100;

const subTotalRoom= (roomPPN * nightStayed);
let isDicount= vipMember == true ? subTotalRoom*discVIP : 0;
const subDiscount= (subTotalRoom - isDicount);
const subServiceCharge= (subTotalRoom + serviceCharge)

const taxValues= subServiceCharge*tax;
const finalPayment= subServiceCharge + taxValues;

const hasFreeBreakfast= nightStayed>3 ? "Free Breakfast" : "Paid Breakfast";

console.log("Room Subtotal : ", subTotalRoom);
console.log("Discount : ", isDicount);
console.log("Tax : ", taxValues);
console.log("Is Free Breakfast : ", hasFreeBreakfast);
console.log("Final Payment : ", finalPayment);

