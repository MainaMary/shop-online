import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import client from "@/libs/prismadb";
import Email from "next-auth/providers/email";
export const getSession = async () => {
  const session = getServerSession(authOptions);
  return session;
};

export const getLoggedInUser = async () => {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return "User not logged in!";
    }
    const currentUser = await client.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });
    if (!currentUser) {
      return "user not found!";
    }
    return currentUser;
  } catch (error) {
    console.log(error);
  }
};
