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
const app = express();

export { app };
