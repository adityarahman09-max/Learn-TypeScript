/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type productInformation= {
    productCode: String,
    productName: String,
    sellingPrice: number,
    stockQuantity: number,
    produckWeight: String,
    avgRating: number,
    isDiscounted: boolean
}

const productData: productInformation[]=[
    {
        productCode: "ID1212",
        productName: "Body Soap",
        sellingPrice: 15000,
        stockQuantity: 25,
        produckWeight: "25 Gram",
        avgRating: 5,
        isDiscounted: true
    },{
        productCode: "ID8596",
        productName: "Shampoo",
        sellingPrice: 17500,
        stockQuantity: 32,
        produckWeight: "32 Gram",
        avgRating: 4,
        isDiscounted: true
    },{
        productCode: "ID6374",
        productName: "Facial Wash",
        sellingPrice: 27000,
        stockQuantity: 19,
        produckWeight: "30 Gram",
        avgRating: 4.5,
        isDiscounted: false
    },
]

console.log(productData)
