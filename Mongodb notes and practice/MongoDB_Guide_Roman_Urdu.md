# MongoDB Guide for Beginners (Roman Urdu)

Yeh guide khaas taur par un logon ke liye hai jo MongoDB pehli baar seekh rahe hain. Hum isay bilkul aasaan zaban (Roman Urdu) mein samjhenge, jaise kisi 5 saal ke bachay ko samjhaya jata hai.

---

## 1. MongoDB Introduction (Taaruf)

**Analogy (Misaal):**
Imagine karo tumhare paas ek **bada sa box** (Dabba) hai jisme tum apne saare khilone (toys) rakhte ho. Kuch khilone chote hain, kuch bade, kuch plastic ke, kuch soft toys.

**MongoDB** wahi bada sa box hai. Yeh ek **Database** hai jahan hum apna saara data (maloomat) store karte hain.

Purane zamane mein log data ko "Excel sheets" ya "Registers" (SQL) ki tarah rakhte thay, jahan har cheez ki jagah fix hoti thi. Lekin MongoDB mein hum data ko **azadi** se rakh sakte hain, jaise box mein khilone.

---

## 2. Databases, Collections, Documents

Isay hum apne **Ghar (House)** ki misaal se samjhte hain:

1.  **Database**: Yeh tumhara poora **Ghar** hai.
2.  **Collection**: Ghar ke andar alag alag **Kamre (Rooms)**. Jaise Kitchen, Bedroom, TV Lounge. MongoDB mein hum inhein "Collections" kehte hain.
    *   *Example:* `Users` ki collection, `Products` ki collection.
3.  **Document**: Kamre ke andar rakhi hui **cheezein**. Jaise Bedroom mein Bed, Kitchen mein Fridge. MongoDB mein har ek record ko "Document" kehte hain.

**Simple Structure:**
> Database (Ghar) -> Collection (Kamra) -> Document (Samaan)

---

## 3. CRUD Operations

CRUD ka matlab hai data ke saath 4 main kaam karna. Chalo dekhte hain yeh kya hain:

### C - Create (Banana / Daalna)
**Misaal:** Tum bazaar se ek naya khilona laye aur usay box mein daal diya.
**MongoDB:** Database mein naya data save karna.
*   *Command:* `db.collection.insertOne({ name: "Ali", age: 5 })`

### R - Read (Padhna / Dhundna)
**Misaal:** Tumne box mein se apni pasandida "Laal Car" dhundi.
**MongoDB:** Database se data nikalna ya dekhna.
*   *Command:* `db.collection.find({ name: "Ali" })`

### U - Update (Tabdeel karna)
**Misaal:** Tumhari car ka sticker phat gaya, tumne naya sticker laga diya. Ya car ka rang change kar diya.
**MongoDB:** Pehle se mojood data ko change karna.
*   *Command:* `db.collection.updateOne({ name: "Ali" }, { $set: { age: 6 } })`

### D - Delete (Khatam karna)
**Misaal:** Ek khilona toot gaya, tumne usay dustbin mein phek diya.
**MongoDB:** Data ko database se hamesha ke liye delete karna.
*   *Command:* `db.collection.deleteOne({ name: "Ali" })`

---

## 4. Query Operators (Sawal Poochna)

Jab humein bohot saare khilono mein se koi khaas cheez chahiye hoti hai, toh hum "Operators" use karte hain.

*   **$eq (Equal - Barabar):** "Mujhe wo car do jo **Laal** rang ki hai."
*   **$gt (Greater Than - Se Bada):** "Mujhe wo khilone do jo **500 rupay se mehange** hain."
*   **$lt (Less Than - Se Chota):** "Mujhe wo khilone do jo **chote** size ke hain."

---

## 5. Aggregation (Jama Karna / Hisaab Lagana)

**Misaal:**
Imagine karo tumne saare khilone zameen par phaila diye. Ab main tumse kehta hoon:
1.  Saari **Cars** alag karo.
2.  Ab in cars mein se sirf **Laal** wali alag karo.
3.  Ab gino kitni laal cars hain.

Is process ko **Aggregation** kehte hain. Step-by-step data ko filter aur process karna.

**Pipeline:**
Yeh ek pipe ki tarah hota hai. Ek taraf se saara data daalo, beech mein filters lago, aur doosri taraf se jawab nikalo.

---

## 6. Indexing (Fihrist)

**Misaal:**
Agar main tumhein ek moti si kitaab (Book) doon aur kahoon ke "Chapter 5" dhundo.
*   **Bina Index ke:** Tumhein shuru se har page palatna padega (Bohot time lagega).
*   **Index ke saath:** Tum shuru mein "Table of Contents" dekhoge, page number mil jayega, aur seedha wahan pohanch jaoge (Bohot jaldi).

**MongoDB:** Hum data par "Index" laga dete hain taake computer usay foran dhund le.

---

## 7. Schema Validation (Rules Lagana)

**Misaal:**
Tumhare paas ek box hai jispe likha hai **"Sirf Gadiyan (Cars Only)"**.
Agar tumhara dost usme "Gudiya (Doll)" daalne ki koshish karega, toh tum use rok doge. "Nahi! Isme sirf cars ayengi."

**MongoDB:** Hum rules set kar sakte hain ke is collection mein sirf specific tarah ka data hi save ho. (Jaise: Email hona zaroori hai, Age number honi chahiye).

---

## 8. Relationships / References (Rishtey)

**Misaal:**
Tumhare paas ek **Remote Control Car** hai.
*   Car alag hai.
*   Remote alag hai.
Lekin dono ka apas mein **Rishta (Connection)** hai. Remote ke bina car nahi chalegi.

**MongoDB:** Kabhi kabhi hum ek data ko doosre data se jodte (link) hain.
*   *User* ka address alag jagah hai, lekin hum User ke document mein Address ki ID rakh dete hain taake pata chale yeh kiska address hai.

---

## 9. Backup & Restore (Hifazat)

**Misaal:**
Tumne ek bohot pyara Lego ka ghar banaya. Tumhein dar hai ke koi usay tod na de.
*   **Backup:** Tumne uski photo khinch li, ya waisa hi ek aur bana ke almari mein chupa diya.
*   **Restore:** Agar Lego toot gaya, toh tum photo dekh kar wapis waisa hi bana loge.

**MongoDB:** Hum apne data ki copy bana ke rakhte hain (Backup), taake agar computer kharab ho jaye toh data wapis la sakein (Restore).

---

## 10. Best Practices (Achi Aadatein)

1.  **Safayi:** Data ko saaf suthra rakho, faaltu data mat jama karo.
2.  **Security:** Apne box (Database) ko taala (Password) laga ke rakho.
3.  **Indexing:** Zaroori cheezon par index lagao taake dhundne mein aasani ho.
4.  **Design:** Pehle socho ke data kaise rakhna hai, phir store karo.

---

Umeed hai ab tumhein MongoDB ki basic samajh aa gayi hogi! Yeh bilkul tumhare khilono ke box jaisa hi hai, bas digital duniya mein.
