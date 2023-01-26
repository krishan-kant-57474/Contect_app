const mongoose = require("mongoose");

// creating database
mongoose
  .connect(process.env.LOCALHOST)
  .then((a) => {
    console.log("connecting successfully....");
  })
  .catch((e) => {
    console.log(e, "no connect");
  });

// mongodb://localhost:27017/contact_page
