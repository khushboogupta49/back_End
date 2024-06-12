
const mongoose= require("mongoose")
 const  express = require("express")
 const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const userRoutes = require("./routes/userRoutes.js");
const storyRoutes = require("./routes/storyRoutes.js");

dotenv.config();
 const app = express()
 app.use(cors({
origine:"http://localhost:3000",
 })
);


 app.use(express.json());
 

//  const corsOptions = {
//     credentials: true,
//     origin: "https://front-ten-azure.vercel.app/",
//   };
//   app.use(cors(corsOptions));


 app.use(cookieParser());
 
 app.use(bodyParser.json());
 
 app.use(bodyParser.urlencoded({ extended: true }));
 
 // routes
 app.use("/api/user", userRoutes);
 app.use("/api/story", storyRoutes);
 

 const db = ( process.env.URL)

 mongoose.connect(db)
.then(()=>{
console.log("CONNECTION SUCCESFULLY TO DB")

}).catch((err)=>{
console.log(err)

})

app.get("/" ,(req,res)=>{
    res.send("WELCOME TO FULLSTACK PROJECT")
    
    })

    app.listen(6000,()=>{
        console.log("listen to 5000")
        })
