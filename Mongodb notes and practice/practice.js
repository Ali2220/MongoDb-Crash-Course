const { MongoClient } = require('mongodb');

// Connection URL (Apne MongoDB ka address yahan likhein)
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name (Hamara 'Ghar')
const dbName = 'KhilonaStore';

async function main() {
  try {
    // 1. Connection (Jurna)
    await client.connect();
    console.log('Connected successfully to server (Server se connect ho gaye!)');

    const db = client.db(dbName);
    const collection = db.collection('toys'); // 'Kamra' jahan khilone rakhenge

    // --- C: CREATE (Banana / Daalna) ---
    console.log('\n--- CREATE OPERATION ---');
    
    // Ek khilona daalna
    const toy1 = { name: "Laal Car", type: "Car", price: 500, color: "Red" };
    const insertResult = await collection.insertOne(toy1);
    console.log('Ek khilona dala gaya:', insertResult.insertedId);

    // Ziada khilone daalna
    const toys = [
      { name: "Neeli Car", type: "Car", price: 600, color: "Blue" },
      { name: "Badi Doll", type: "Doll", price: 1000, color: "Pink" },
      { name: "Choti Ball", type: "Ball", price: 100, color: "Green" },
      { name: "Remote Car", type: "Car", price: 2000, color: "Black" }
    ];
    const insertManyResult = await collection.insertMany(toys);
    console.log('Bohot saare khilone dale gaye:', insertManyResult.insertedCount);


    // --- R: READ (Padhna / Dhundna) ---
    console.log('\n--- READ OPERATION ---');

    // Saare khilone dekhna
    const allToys = await collection.find({}).toArray();
    console.log('Saare Khilone:', allToys);

    // Sirf 'Car' type ke khilone dhundna (Query Operator)
    const cars = await collection.find({ type: "Car" }).toArray();
    console.log('Sirf Gadiyan (Cars):', cars);

    // Mehangay khilone dhundna ($gt operator - Greater Than)
    const expensiveToys = await collection.find({ price: { $gt: 800 } }).toArray();
    console.log('800 se mehangay khilone:', expensiveToys);


    // --- U: UPDATE (Tabdeel karna) ---
    console.log('\n--- UPDATE OPERATION ---');

    // 'Laal Car' ki price change karna
    const updateResult = await collection.updateOne(
      { name: "Laal Car" }, // Kisko dhundna hai
      { $set: { price: 550 } } // Kya change karna hai
    );
    console.log('Price update ho gayi. Modified count:', updateResult.modifiedCount);


    // --- D: DELETE (Khatam karna) ---
    console.log('\n--- DELETE OPERATION ---');

    // 'Choti Ball' ko delete karna
    const deleteResult = await collection.deleteOne({ name: "Choti Ball" });
    console.log('Khilona delete ho gaya. Deleted count:', deleteResult.deletedCount);


    // --- AGGREGATION (Hisaab Lagana) ---
    console.log('\n--- AGGREGATION ---');

    // Har type ke kitne khilone hain aur unki average price kya hai?
    const stats = await collection.aggregate([
      {
        $group: {
          _id: "$type", // Type ke hisaab se group banao (Cars alag, Dolls alag)
          totalToys: { $sum: 1 }, // Ginti karo
          averagePrice: { $avg: "$price" } // Price ki average nikalo
        }
      }
    ]).toArray();
    console.log('Khilono ka hisaab (Stats):', stats);


    // --- INDEXING (Tezi se dhundna) ---
    console.log('\n--- INDEXING ---');

    // Name par index lagana taake naam se dhundna tez ho
    const indexResult = await collection.createIndex({ name: 1 });
    console.log('Index ban gaya:', indexResult);

  } catch (err) {
    console.error('Koi ghalti hui:', err);
  } finally {
    // Connection band karna
    await client.close();
    console.log('\nConnection band kar diya.');
  }
}

main();
