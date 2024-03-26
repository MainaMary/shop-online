import client from "@/libs/prismadb";
import bcrypt from "bcrypt";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";

async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = { email, name, hashedPassword };
    const user = await client.user.create({
      data,
    });
    return user;
  } catch (error: any) {
    console.log(error.message);
  }
}

export { POST };
