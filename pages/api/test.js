import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default async function addUserHandler(req, res) {
  // const { userName, password } = req.body

  if (req.method === "POST") {
    // Process a POST request
    try {
      const { userName, password } = req.body
      const result = await prisma.ddmin.create({
        data: {
          userName,
          password
        },
      })
      // res.json(result);
      res.status(200).json({
        status: 'Successfully registered!',
        result
      });
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong' });
    }
  } else {
    // Handle any other HTTP method
    return res.status(405).json({ message: 'Method not allowed-SALAH WOY' });
  }
}
