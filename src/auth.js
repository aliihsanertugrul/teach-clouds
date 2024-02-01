import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";
import { isUserAuthorized } from "./helpers/auth";


const config = {
    providers: [
        Credentials({
            async authorize(credentials){
                const res = await login(credentials);
                const data = await res.json();
                // console.log(data)

                if(!res.ok) return null;
                //backenden gelen data objecti daha anlaşılır hale getirdik.
                const payload={
                    user:{...data},
                    accessToken:data.token.split(" ")[1]
                }
                delete payload.user.token
                // console.log("payload",payload)
                return payload;
            }
        })
    ],
    callbacks:{
        //middlewarein kapsama alanına giren sayfalara yapılan isteklerden hemen önce çalışır.
        authorized({ auth, request: { nextUrl }}){
            //kullanıcı bir sayfadan diğer sayfaya geçerken buradan kontol yapılır ona göre izin sağlanır.
            const isLoggedIn=!!auth?.user;
            const  isOnLoginPage=nextUrl.pathname.startsWith("/login")
            const  isOnDashboardPage=nextUrl.pathname.startsWith("/dashboard")

            if(isLoggedIn){
                if(isOnDashboardPage){
                    const isAuth=isUserAuthorized(auth.user.role,nextUrl.pathname);
                    if(isAuth) return true;
                    return Response.redirect(new URL("/unauthorized",nextUrl))
                }
                else if(isOnLoginPage){
                    return Response.redirect(new URL("/dashboard",nextUrl))
                }
            }else if(isOnDashboardPage){
                //kullanıcıyı login sayfasına gönderir.
                return false
            }
            return true;
        },
        //next-auth jwt datasına ihtiyac duyan her route için bu callback cagrılır.
        async jwt({token,user}){
            return{...user,...token}
            //buradaki returnü sessiona göndeririz
        },
        async session({session,token}){
            session.accessToken=token.accessToken;
            session.user=token.user;
        }
    },
    pages: {
        signIn: "/login"
    }
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
