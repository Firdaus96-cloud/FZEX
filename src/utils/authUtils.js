import { UserInfo } from "@/models/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions"; // Make sure this points to where your authOptions are defined

export async function isAdmin() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return false;
  }
  const userInfo = await UserInfo.findOne({ email: userEmail });
  if (!userInfo) {
    return false;
  }
  return userInfo.admin;
}
