import {getServerSession} from "next-auth";
import {authConfig} from "@/app/api/auth/[...nextauth]/route";

export const getAuthSession = () => {
    return getServerSession(authConfig);
}

export const getRequiredAuthSession = async () => {
    const session = await getAuthSession();

    if (!session?.user) {
        throw new Error("Not authenticated");
    }

    return session;
}