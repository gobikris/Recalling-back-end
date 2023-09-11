const express = require('express');
const connectDB = require('./config/DBconnection');
const router = require('./routes/contactRoutes');
const { registerUser, loginUser, getAllUsers } = require('./controllers/auth');
const { authRoutes } = require("./routes/Auth");
const controllers = require('./controllers/contactControllers');
const ticket = require('./controllers/ticketControllers');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

// connectDB();
// app.use(express.json());
// app.get('/',(req,res)=>{res.send("Hi there ! 😊")})

// app.post("/auth/register", registerUser);

// app.post("/auth/login", loginUser);

// app.get("/auth/allusers", getAllUsers);

// app.use("/auth", authRoutes);
// app.use("/api/contacts", router)

// app.use("/api/contacts",router)

// app.listen(PORT,()=>{console.log(`Server is online port:- ${PORT}`)})

(async () => {
  try {
    connectDB();
    app.use(express.json());
    app.get("/", (req, res) => {
      res.send("Hi there ! 😊");
    });

    app.post("/auth/register", registerUser);

    app.post("/auth/login", loginUser);

    app.get("/auth/allusers", getAllUsers);
    app.get("/contacts", controllers.getAllContact);
    app.post("/createcontact", controllers.createContact);
    app.get("/getticket", ticket.getTicket);
    app.get("/api/getdetails",ticket.getCombinedData);
    app.post("/createticket", ticket.riseTicket);
    app.listen(PORT, () => {
      console.log(`Server is online port:- ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
})();