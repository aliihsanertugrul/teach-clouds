import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { login } from "./services/auth-service"

const config={
    providers:[
        Credentials({
            async authorize(credentials){
                const res=await login(credentials);
                const data=await res.json();
                console.log("data",data)
                if(!res.ok) return null;
                return  data ?? null;
            }
        })
    ],
    callbacks:{
        authorized({auth,request:{nextUrl}}){
            return true;
        }
    },
    pages:{
        signIn:"/login"
    }
}


export const {handlers,auth,signIn,signOut}=NextAuth(config);

//auth middleware de kullanıyoruz