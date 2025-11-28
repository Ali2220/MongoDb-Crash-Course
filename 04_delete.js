use("ecommerce")

/* jis contact ka name Alice hai, usse delete kar do. */
// db.contacts.deleteOne(
//     {name: 'Alice'}
// )

/* jis product ki category Computers hai, un sab ko delete kardo */
db.products.deleteMany(
    {category: 'Computers'}
)