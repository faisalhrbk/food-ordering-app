//Core Modules

//External/Packages Modules
import express from "express";
import cors from "cors";
import "dotenv/config";

//Local Modules
import mongoConnect from "./config/database.js";

// App Config
const app  = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Api Routes
app.get('/',
    (_, res) => {
        res.json({message: "sit back relax and enjoy the show"})
    }
)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    mongoConnect()
    console.log(`server running on http://localhost:${PORT}/`)
})