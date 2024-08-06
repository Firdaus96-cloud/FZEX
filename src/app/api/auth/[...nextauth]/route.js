import NextAuth from "next-auth";
import { authOptions } from "@/libs/authOptions";

const handler = (req, res) => {
  console.log('Incoming request:', req.method, req.url, req.headers);
  return NextAuth(req, res, authOptions)
    .then(response => {
      console.log('Handler response:', response);
      return response;
    })
    .catch(error => {
      console.error('Handler error:', error);
      throw error;
    });
};

export { handler as GET, handler as POST };
