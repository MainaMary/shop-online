import client from "@/libs/prismadb";
import bcrypt from "bcrypt";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const data = { email, name, hashedPassword };
  const user = await client.user.create({ data });
  return NextResponse.json(user);
}
// async function POST(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const { email, password, name } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const data = { email, name, hashedPassword };
//     const user = await client.user.create({
//       data,
//     });
//     return user;
//   } catch (error: any) {
//     console.log(error.message);
//   }
// }
