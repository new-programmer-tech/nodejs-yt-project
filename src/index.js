import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection  error: " + err);
  });
