import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

const client_id = "1039121191246-bl5iuenrngdl3m4mrohlt288b4u3j431.apps.googleusercontent.com";
const client_secret = "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";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: client_id,
            clientSecret: client_secret
        })
    ]
})