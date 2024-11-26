// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   callbacks: {
//     authorized: ({ token }) => !!token,
//   },
//   pages: {
//     signIn: "/",
//   },
// });

// export const config = {
//   matcher: ["/products", "/checkout"],
// };
// export { default } from "next-auth/middleware";
// export const config = {
//   matcher: ["/products"],
// };

// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   callbacks: {
//     authorized: ({ token }) => {
//       // Allow access if the user has a token (authenticated)
//       if (token) {
//         // Check if the user is new
//         return token.isNewUser || true;
//       }
//       return false; // Block if no token
//     },
//   },
//   pages: {
//     signIn: "/", // Redirect to the sign-in page if unauthorized
//   },
// });

// export const config = {
//   matcher: ["/products", "/checkout"], // Protect these routes
// };

import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      const url = new URL(req.url);

      // Allow access if the user is authenticated
      if (token) return true;

      // Allow access if the `newUser` query parameter is present
      if (url.searchParams.get("newUser") === "true") return true;

      return false; // Block access otherwise
    },
  },
  pages: {
    signIn: "/", // Redirect to sign-in page if unauthorized
  },
});

export const config = {
  matcher: ["/products", "/checkout"],
};
