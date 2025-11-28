use("ecommerce");

/* Sare products print karo jo "Computers" category mai hain */
// printjson(db.products.find({"category": "Computers"}));

/* Sare products print karo jinki price 1000 se kam hai */
// printjson(db.products.find({
//     price: {$lt: 1000}
// }))

/* Sare products print karo jinki price 1000 se zyada aur 50000 se kam hai */
// printjson(db.products.find({
//     price: {$gt: 1000, $lt: 50000}
// }))


/* Products lao jin ki category "Computers" ho ya Products lao jinka stock 50 se kam ho */
// printjson(
//   db.products.find({ $or: [
//     { category: "Computers" }, 
//     { stock: { $lt: 50 } }
// ]
// })
// );

/* Projection (Select Specific Fields), name: 1 means name show kro, and _id: 0 means _id show nhi kro */
// printjson(db.products.find({}, {name: 1, price: 1, _id: 0}))


/* Sorting and Limiting  --> Pagination mai bht kaam ata hai.
O MongoDB bhai, mere liye products collection me jo sabse mehenga product hai na... bas wohi ek bhej do */
// printjson(db.products.find().sort({price: -1}).limit(1))


