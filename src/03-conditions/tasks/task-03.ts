/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */

const customerName: string = "Raka Saputra";
const custMonthlyUsage: number = 124;

console.log("Customer Name : ", customerName);
console.log("Monthly Usage : ", custMonthlyUsage);

if (custMonthlyUsage < 50){
    console.log("Recomended Pacakge : Basic");
} else if (custMonthlyUsage >= 50 && custMonthlyUsage <= 150 ) {
    console.log("Recomended Package : Standard")
} else if (custMonthlyUsage > 150){
    console.log("Recomemnded Package : Premium")
}