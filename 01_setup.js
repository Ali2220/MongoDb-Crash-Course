/* 'ecommerce' database pe switch ho jao (agar exist na ho to create ho jayegi) */
use("ecommerce");

/* Puri database ko delete kar deta hai (fresh start ke liye best) */
db.dropDatabase();

/* Products collection me demo data insert kar rahe hain */
db.products.insertMany([
  {
    name: "Wireless Mouse",
    price: 799,
    category: "Electronics",
    stock: 120,
    ratings: 4.5,
    tags: ["computer", "accessory", "wireless"],
    createdAt: new Date(), // Item ka timestamp store kar rahe hain
  },
  {
    name: "Mechanical Keyboard",
    price: 2499,
    category: "Electronics",
    stock: 80,
    ratings: 4.8,
    tags: ["keyboard", "mechanical"],
    createdAt: new Date(),
  },
  {
    name: "Gaming Laptop",
    price: 85999,
    category: "Computers",
    stock: 30,
    ratings: 4.6,
    tags: ["gaming", "laptop"],
    createdAt: new Date(),
  },
]);

/* Contacts collection me users ke messages add kar rahe hain */
db.contacts.insertMany([
  {
    name: "Alice",
    message: "Loved your website!",
    phone: "9876543210",
    createdAt: new Date(), // Message ka timestamp
  },
  {
    name: "Bob",
    message: "Do you have discounts on laptops?",
    phone: "9123456789",
    createdAt: new Date(),
  },
  {
    name: "Carol",
    message: "I want to cancel my order.",
    phone: "9988776655",
    createdAt: new Date(),
  },
]);
