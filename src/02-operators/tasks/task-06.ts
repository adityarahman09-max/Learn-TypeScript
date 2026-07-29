/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const chargesPlaying: number=8000;
const playingHours: number=7;
const playinhMinutes: number=35;

const totalPlayingTime: number=(playingHours*60)+playinhMinutes;

const remainingMinutes: number= totalPlayingTime % 60;

let totalBilledHours: number = playingHours;
let resultRemainingMinutes = remainingMinutes > 0 ? totalBilledHours += 1 : 0; 

const paymentBeforeDiscount: number = totalBilledHours * chargesPlaying;

let discountAmount: number = 0;
let resultDiscount = totalBilledHours > 5 ? discountAmount = paymentBeforeDiscount * 0.15 : discountAmount = 0;

const finalPayment: number = paymentBeforeDiscount - resultDiscount;

console.log(`- Total playing time in minutes : ${totalPlayingTime} minutes`);
console.log(`- Remaining minutes after hours : ${remainingMinutes} minutes`);
console.log(`- Total billed hours            : ${totalBilledHours} hours`);
console.log(`- Total payment before discount : Rp${paymentBeforeDiscount}`);
console.log(`- Discount amount               : Rp${discountAmount}`);
console.log(`- Final payment                 : Rp${finalPayment}`);