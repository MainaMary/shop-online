import client from "@/libs/prismadb";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const data = { email, password, hashedPassword };
  const user = await client.user.create({
    data,
  });
  return user;
}
export { POST };
