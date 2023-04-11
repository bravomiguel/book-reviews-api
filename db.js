const mongoose = require('mongoose');

const {
  DB_URL='mongodb://127.0.0.1:27017/test',
} = process.env;

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(DB_URL);
    console.log('DB connected');
    // console.log(DB_URL);
  } catch (err) {
    console.log(err);
  }
}