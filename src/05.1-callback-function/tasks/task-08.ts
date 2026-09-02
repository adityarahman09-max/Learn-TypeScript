/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */

type Transaction = {
    id: string;
    customer: string;
    amount: number;
    status: string;
};

const transactions: Transaction[] = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */

type VALUES_TYPES = "HIGH VALUE" | "MEDIUM VALUE" | "LOW VALUE" 
let valuesType: VALUES_TYPES = "HIGH VALUE"

function processData<T, R>(
    arr: T[],
    callback: (item: T) => R
): R[] {
    const result: R[] = [];
    for (const item of arr) {
        result.push(callback(item));
    }
    return result;
}

function extractCustomerName(tx: Transaction): string {
    return tx.customer;
}

function determineCategory(tx: Transaction): string {
    let category: VALUES_TYPES = "LOW VALUE";

    if (tx.amount >= 2000000) {
        category = "HIGH VALUE";
    } else if (tx.amount >= 1000000) {
        category = "MEDIUM VALUE";
    }

    return `Name : ${tx.customer.padEnd(5)} | Value : ${category}`;
}

function calculateFee(tx: Transaction): string {
    let fee = 0;

    if (tx.status === "paid") {
        fee = tx.amount * 0.02; // 2% fee
    } else if (tx.status === "pending") {
        fee = tx.amount * 0.01; // 1% fee
    } else {
        fee = 0; // 0% fee
    }

    return `Name : ${tx.customer.padEnd(5)} | Fee : ${fee}`;
}

const customerNames = processData(transactions, extractCustomerName);

const categories = processData(transactions, determineCategory);

const platformFees = processData(transactions, calculateFee);

console.log("Customer Names:", customerNames);
console.log("Categories:", categories);
console.log("Platform Fees:", platformFees);