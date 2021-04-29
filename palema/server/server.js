const express = require('express');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

// Set up Server

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server: ${PORT}`));

app.use(express.json())
app.use(cors())
// Connect to MongoDB

mongoose.connect(process.env.MDB,  {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true 
}, 
(err) => {
    if (err) return console.error(err);
    console.log("MongoDB is Connected")
});

//set routes 
app.use("/auth", require ("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));