import { connectMongoDp } from "@/lib/mongodp";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDp();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }
          const PM = await bcrypt.compare(password, user?.password);

          if (!PM) {
            return null;
          }
          return user;
        } catch (error) {
          console.log(error);
        }
      },
      session: {
        Strategy: "jwt",
      },
      secret: process.env.AUTH_SECRET,
      pages: {
        home: "/",
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
