import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
// file upload
import fileUpload from "express-fileupload";

dotenv.config();

const SECRET = process.env.SESS_SECRET
const PORT = process.env.APP_PORT


const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

// membuat table otomatis

// (async()=>{
//     await db.sync();
// })();

app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);


app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(UserRoute);
app.use(AuthRoute);


app.listen(PORT, () => {
  console.log("Server up and running...");
});
