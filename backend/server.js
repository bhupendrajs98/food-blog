const express = require('express');
const app = express();
require('dotenv').config();
const connectDb = require("./config/connectionDb");
const cors = require('cors');  // ✅ import cors

const PORT = process.env.PORT || 3000;

// ----------------------
// CONNECT DATABASE
// ----------------------
connectDb();

// ----------------------
// MIDDLEWARE
// ----------------------
app.use(cors());        // ✅ enable CORS for all origins
app.use(express.json()); // JSON middleware

// ----------------------
// ROUTES
// ----------------------
app.use("/recipe", require("./Routes/recipe"));

// ----------------------
// START SERVER
// ----------------------
app.listen(PORT, () => {           
  console.log(`App is running on port ${PORT}`);
});
