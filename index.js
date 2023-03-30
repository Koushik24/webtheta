const app = require('./app');
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const cors = require("cors");

mongoose.connect(
  // "mongodb://kishor:1234@localhost:27017/sethu?authSource=admin",
  // "mongodb+srv://user:MnAsjkfkR8LorxMS@user-details.ahxlham.mongodb.net/UserDatabase1",
  // "mongodb://localhost:27017/UserDatabase3",
  // "mongodb://localhost:27017/UserDatabase4",
  process.env.MONGODB_URL,
  {
    useNewUrlParser: false,
    useUnifiedTopology: true,
  }, 
  (err) => {
    if (err) {
      console.log("Db connection issue", err);
    } else {
      console.log("Db is connected"); 
    }
  }
); 

app.use(cors());

app.listen(port, () => {
  console.log("server is connect:", port);
});

