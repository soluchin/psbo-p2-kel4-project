import sqlite from "sqlite";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // const db = await sqlite.open("../../prisma/my-db.db");

  if (req.method === "POST") {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
