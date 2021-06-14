import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default async function registHandler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    try {
      const { email, password } = req.body;

      const result = await prisma.user.findMany({
        where: { email: email },
      });
      if (result.length === 0) {
        throw new Error("Ëmail tidak ditemukan");
      }
      // res.json(result);
      if (result[0].password !== password) {
        throw new Error("Password salah!");
      }
      res.status(200).json({
        status: "Successfully login !",
        result,
      });
    } catch (err) {
      res
        .status(400)
        .json({ message: "Something went wrong", detailMessage: err.message });
    }
  } else {
    // Handle any other HTTP method
    return res.status(405).json({ message: "Method not allowed-SALAH WOY" });
  }
}
