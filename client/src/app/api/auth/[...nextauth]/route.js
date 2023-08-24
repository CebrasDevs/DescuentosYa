import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        })
    ],
    callbacks: {
        async session({session}){
            return session;
        },
        async signIn({profile}){
            console.log(profile);
            try {
                return true;
            } catch (error){
                
                console.log(error)
                return false
            }
        }
    }
})

export { handler as GET, handler as POST }