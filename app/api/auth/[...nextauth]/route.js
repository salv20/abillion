// import { connectMongoDp } from "@/lib/mongodp";
// import User from "@/models/user";
// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {},
//       async authorize(credentials) {
//         console.log(credentials);

//         const { email, password } = credentials;

//         try {
//           await connectMongoDp();
//           const user = await User.findOne({ email });

//           if (!user) {
//             return null;
//           }
//           const PM = await bcrypt.compare(password, user?.password);

//           if (!PM) {
//             console.log(PM);

//             return null;
//           }
//           console.log(user);

//           return user;
//         } catch (error) {
//           console.log(error);
//         }
//       },
//       session: {
//         Strategy: "jwt",
//       },
//       secret: process.env.AUTH_SECRET,
//       pages: {
//         home: "/",
//       },
//     }),
//   ],
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

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
            throw new Error("User not found");
          }

          const isPasswordMatch = await bcrypt.compare(password, user.password);
          if (!isPasswordMatch) {
            throw new Error("Invalid credentials");
          }

          // Only return fields you want available in the session and JWT
          return {
            id: user._id,
            email: user.email,
            userName: user.userName, // Assuming this exists in your User schema
          };
        } catch (error) {
          console.error(error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  // Configure JWT and Session handling
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Attach user fields to the token on initial login
      if (user) {
        token.id = user.id;
        token.userName = user.userName;
      }
      return token;
    },
    async session({ session, token }) {
      // Add custom fields to the session
      session.user.id = token.id;
      session.user.userName = token.userName;
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/signin", // Redirect to your custom sign-in page
    error: "/signin", // Redirect in case of error
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
