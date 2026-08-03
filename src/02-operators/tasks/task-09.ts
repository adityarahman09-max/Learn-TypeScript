/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const mechanicalKeyboard: number = 850000;
const wirelessMouse: number = 275000;
const monitorStand: number = 420000;
const voucherValues:number = 100000;
const premiumMember: boolean = true;

const subTotalPure = mechanicalKeyboard + (wirelessMouse * 2) + monitorStand; 
let subTotal = mechanicalKeyboard + (wirelessMouse * 2) + monitorStand;

let memberDiscount = premiumMember == true ? subTotal * 10/100 : 0;
subTotal -= memberDiscount;
subTotal -= voucherValues;

const rewardPoints = subTotal/50000;

const VAT = subTotal * 11/100;
const finalPayment = subTotal * VAT;

const freeShipping = premiumMember == true || subTotal > 1500000 ? "Free Shipping" : "Paid Shipping";

console.log(`Produk SubTotal : ${subTotalPure}`);
console.log(`Membership Discount (10%) : ${memberDiscount}`);
console.log(`Voucher : ${voucherValues}`);
console.log(`Payment before Tax : ${subTotal}`);
console.log(`VAT : ${VAT}`);
console.log(`Final Payment : ${finalPayment}`);
console.log(`Rewards Point : ${rewardPoints}`);
console.log(`Free Shipping : ${freeShipping}`);
