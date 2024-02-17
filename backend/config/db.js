const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://tusharkaran99:aoFnXtR9luvt6n0R@cluster0.8vgpzxl.mongodb.net/?retryWrites=true&w=majority", {
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) { 
    console.log(`Error: ${error.message}`)
    process.exit(); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;