import {DefaultSession, DefaultUser} from "next-auth";

declare module "next-auth" {
    export interface Session extends DefaultSession {
        user: DefaultUser &  {
            id: string;
        }
    }
}