/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */

type OrderS = {
  id : string;
  paid : boolean;
  stockAvailable : boolean;
}

const orders : OrderS[] = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

let ordersReadyToShip : number = 0;
let unpaidOrder : number = 0;
let ordersWaitingForStock : number = 0;
let idReadytoShip : string[] = [];

for(const order of orders){

  if(order.paid && order.stockAvailable){
    ordersReadyToShip ++;
    idReadytoShip.push(order.id);
  }else if(order.stockAvailable && !order.paid){
    unpaidOrder ++;
  }else{
    ordersWaitingForStock ++;
  }
}

console.log(`Number of Orders Ready to Ship : ${ordersReadyToShip}`);
console.log(`Number of Unpaid Orders : ${unpaidOrder}`);
console.log(`Number of Orders Waiting for Stock : ${ordersWaitingForStock}`);
console.log(`ID that Ready to Ship : ${idReadytoShip}`);

