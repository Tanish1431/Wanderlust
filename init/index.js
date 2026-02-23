if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
}
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLAS_DB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}
const initDB = async () => {
    try {
      await Listing.deleteMany({}); // Clear the collection before inserting new data

      initData.data = initData.data.map((obj) => ({...obj, owner : '67ace873b0e7e68b1e5ea5fd'}));
           
      await Listing.insertMany(initData.data); // Insert the transformed data into the database
      console.log("Data was initialized successfully");
    } catch (err) {
      console.error("Error initializing data:", err);
    }
  };
  
initDB();