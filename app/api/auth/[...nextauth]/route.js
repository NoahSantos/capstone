import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
// import { authOptions } from "@/server/auth";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ]
}
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};