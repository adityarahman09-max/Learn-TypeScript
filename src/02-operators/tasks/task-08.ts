/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const previousMeter: number = 25640;
const currentMeter: number = 25892;
const priceperKWH: number = 1650;
const hasSolarPanel: boolean = true;
const hasSavingMode: boolean = false;

const energyUsed = currentMeter - previousMeter;
let subTotal = energyUsed * priceperKWH;

const isDiscounted = hasSolarPanel == true ? subTotal* 20/100 : 0;

const isDiscounted2 = hasSavingMode ? subTotal* 5/100 : 0;

const finalSubTotal: number = subTotal - isDiscounted - isDiscounted2;

const greenEnergyProgram : boolean  = ( hasSolarPanel == true && energyUsed < 300 && hasSavingMode);
const isEligible = greenEnergyProgram ? "ELigible for Green Energy Program" : "Not Eligible for Green Energy Program"

console.log("Total Energy Used : ", energyUsed);
console.log("Total Elecricit Bill : ", subTotal);
console.log("Discounted : ", finalSubTotal);
console.log("Is Eligible for GEP : ", isEligible)