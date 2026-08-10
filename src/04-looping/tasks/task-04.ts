/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales: number[] = [
  125000,
  350000,
  78000,
  910000,
  150000,
  420000,
  275000,
  99000,
  640000,
  18000
];

let totalRevenue: number = 0;
let highestTransaction: number = sales[0]; 
let lowestTransaction: number = sales[0];
let countHighTransactions: number = 0;


for (const amount of sales) {
  
  totalRevenue += amount;

  
  if (amount > highestTransaction) {
    highestTransaction = amount;
  }

  
  if (amount < lowestTransaction) {
    lowestTransaction = amount;
  }

  
  if (amount >= 300000) {
    countHighTransactions++;
  }
}


const averageTransaction = totalRevenue / sales.length ;

// Cetak hasil
console.log(`1. Total Revenue: Rp${totalRevenue.toLocaleString("id-ID")}`);
console.log(`2. Highest Transaction: Rp${highestTransaction.toLocaleString("id-ID")}`);
console.log(`3. Lowest Transaction: Rp${lowestTransaction.toLocaleString("id-ID")}`);
console.log(`4. Transactions >= Rp300,000: ${countHighTransactions}`);
console.log(`5. Average Transaction: Rp${averageTransaction.toLocaleString("id-ID")}`);