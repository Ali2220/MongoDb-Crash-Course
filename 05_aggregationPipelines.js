use("ecommerce");

// db.sales.insertMany([
//   { _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
//   { _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
//   { _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
//   { _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
//   { _id: 5, item: "Mango", price: 15, quantity: 3, category: "Fruit" },
// ]);


/* $match – Filter karna, $project - field select karna... Bhai mujhe sirf fruit wali sales chahiye, aur usme bhi item + price ka short clean view do.  */
// printjson(

//     db.sales.aggregate([
//         {$match: {category: 'Fruit'}},
//         {$project: {_id: 0, item: 1, price: 1}},
//     ])
// )

/* Let’s calculate total sales (price × quantity) for each category:

$group: Same category walay sab items ko ek group me jama karo
_id: '$category': Bhai group ka naam category ke naam pe rakh do. Matlab ek group ka naam 'Fruit', doosre ka 'Vegetable'. 
*/
printjson(

    db.sales.aggregate([
        {$group: {
            _id: '$category',
            totalSales: {$sum: {$multiply: ["$price", "$quantity"]}}
        }}
    ])

)