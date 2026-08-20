/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

let totalSales: number = 0;

function calculateTotalSales(sales: number[]): number {

  for (const sale of sales) {
    totalSales += sale;
  }

  return totalSales;
}

function findHighestTransaction(sales: number[]): number {
  let highestTransaction: number = 0;

  for (const sale of sales) {
    if (sale > highestTransaction) {
      highestTransaction = sale;
    }
  }

  return highestTransaction;
}

function findLowestTransaction(sales: number[]): number {
  let lowestTransaction: number = sales[0];

  for (const sale of sales) {
    if (sale < lowestTransaction) {
      lowestTransaction = sale;
    }
  }

  return lowestTransaction;
}

function calculateAverageSale(sales: number[]): number {
  let averageSale: number = totalSales / sales.length;

  return averageSale;
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
  let countLargeTrans: number = 0;

  for(const sale of sales){
    if(sale>500000){
      countLargeTrans++;
    }
  }


  return countLargeTrans;
}