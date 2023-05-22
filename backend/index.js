const express = require('express')
const cors = require('cors')
const session = require('express-session')
const dotenv = require('dotenv')
const db = require('./config/Database.js')
const SequelizeStore = require('connect-session-sequelize')
const UserRoute = require('./routes/UserRoute.js')
const AuthRoute = require('./routes/AuthRoute.js')

const fileUpload = require('express-fileupload')
// tes push githu
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


// md5
// uuid
// argon2
// express-fileupload or Multer