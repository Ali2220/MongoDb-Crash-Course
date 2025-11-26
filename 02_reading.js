use("ecommerce");

/* Sare products print karo jo "Computers" category mai hain */
// printjson(db.products.find({"category": "Computers"}));

/* Sare products print karo jinki price 1000 se kam hai */
// printjson(db.products.find({
//     price: {$lt: 1000}
// }))

/* Sare products print karo jinki price 1000 se zyada aur 50000 se kam hai */
printjson(db.products.find({
    price: {$gt: 1000, $lt: 50000}
}))
