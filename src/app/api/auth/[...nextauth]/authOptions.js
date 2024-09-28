import { LOGIN_URL } from "@/app/lib/ApiEndPoints";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import NextAuth from "next-auth";

export const authOptions = {
  pages: {
    signIn: "/account/profile",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user; // Store the user in JWT after login
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user; // Attach user to session
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        tel: { label: "Telephone", type: "number" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        
        try {
          const res = await axios.post(LOGIN_URL, credentials,
            {
              headers: {
                "Content-Type": "application/json",
              },
            });
            
          const response = res.data;

          const user = response?.user;

          if (user) {
            console.log("response : ", user);
            return user
          } else {
            return null;
          }
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
