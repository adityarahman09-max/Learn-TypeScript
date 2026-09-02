/**
 * An online store has the following products:
 */

type product = {
    name: string,
    price: number
}
const products = [
    { name: "Keyboard", price: 850000 },
    { name: "Mouse", price: 275000 },
    { name: "Monitor", price: 2200000 },
    { name: "Headset", price: 650000 }
];

/**
 * The warehouse system needs to perform different operations on the same product list.
 * 1. Operation for display product
 * Keyboard - Rp850000
 * Mouse - Rp275000
 * Monitor - Rp2200000
 * Headset - Rp650000
 * 
 * 2. Display expensive products - Only products with a price above Rp1,000,000 should be displayed.
 * 3. Display products that cost more than Rp500,000 and show a 10% discount price.
 * 
 * Instead of creating a separate loop for every operation, the developer creates a reusable processing function.
 */

function displayProcess(
    productsData: product[],
    callback: (price: product) => void
): void {
    for (const item of productsData) {
        callback(item)

    }
}

displayProcess(products, (item) => {
    console.log(`${item.name} - Rp${item.price}`);
});

displayProcess(products, (item) => {
    if (item.price > 1000000) {
        console.log(`${item.name} - Rp${item.price}`);
    }
});

displayProcess(products, (item) => {
    if (item.price > 500000) {
        const discountedPrice = item.price * 0.9;
        console.log(`${item.name} - Original: Rp${item.price} | Discounted: Rp${discountedPrice}`);
    }
});




