import express from "express"
import cors from "cors"
import "dotenv/config"
const app  = express();
app.use(express.json());
app.use(cors());

app.get('/',
    (req, res) => {
        res.json({message: "sit back relax and enjoy the show"})
    }
)

app.listen(3000, ()=> console.log("server running on http://localhost:3000/"))