// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//   } catch (error) {
//     console.error("DB ERROR", error);
//     throw error;
//   }
// })();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//use method is used for middleware and configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);

app.use(express.json({ limit: "16kb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  }),
);
app.use(express.static("public"));
app.use(cookieParser());

export { app };
