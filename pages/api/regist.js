import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default async function registHandler(req, res) {

  if (req.method === "POST") {
    // Process a POST request
    try {
      const { 
        firstName, 
        lastName,
        email,
        password } = req.body

      const result = await prisma.user.create({
        data: {
        firstName, 
        lastName,
        email,
        password
        },
      })
      // res.json(result);
      res.status(200).json({
        status: 'Successfully registered!',
        result
      });
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong', detailMessage: err.message });
    }
  } else {
    // Handle any other HTTP method
    return res.status(405).json({ message: 'Method not allowed-SALAH WOY' });
  }
}
