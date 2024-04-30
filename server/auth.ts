import {
    getServerSession, type NextAuthOptions,
} from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import {userService} from './services/userService';
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt', // the default strategy is JWT when no adapter is identified, we redefined it here to make it obvious what strategy to use
    },
    callbacks: {
        async jwt({token, account, profile}){
            // this is where you want to store the userID in the User object. The id is coming from the authorize callback and is available in the account parameter when the type is 'credentials'. This is where you can also add additional information from the database or external API to the token like user preferences, access level, etc
            console.log("---------------jwt-----------------")
            console.log({token}, {account}, {profile})
            if (account && account.type === 'credentials') {
                token.userId = account.providerAccountId;
                // this id that is coming from authorize() callback
            }
            return token
        },
        async session ({session, token, user}){
            // after the token is created in JWT callback, we need to pass the userID to the user.id so it will be available to the UI
            // because the User type only consists of name, email ..etc, we will create a type definition to add id in the User object later
            console.log("---------------session-----------------")
            session.user.id = token.userId
            console.log({ session }, { token }, { user })
            return session
        },
    },
    pages: {
        signIn: '/login', // custom sign in path
        /* 
        signOut: '/path',
        error: '/error',
        verifyRequest: '/requestVerification',
        newUser: '/newUser',
        */
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const {username, password} = credentials as {
                    username: string,
                    password: string
                }

                return userService.authenticate(username, password);
                // here we authenticate the username and password using the userService that we created earlier 
            },

        }),
    ]
}

export const getServerAuthSession = () => getServerSession(authOptions)