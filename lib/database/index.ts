import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGO_URL) throw new Error("Mongo url is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGO_URL, {
      dbName: "Eventify",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
