import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import  prisma from "../../../../../prisma"
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
  credentials: {
    email: {
      type: "email",
      label: "Email",
      placeholder: "email",
    },
    password: {
      type: "password",
      label: "Password",
      placeholder: "password",
    },
      }, authorize: async (credentials) => {
        const user = await prisma.user.findUnique({ where: { email: `${credentials.email}` }, select: { email: true, name: true, newsArticle: true } })
        console.log(user)
        return user;
  }
})
  ],
})