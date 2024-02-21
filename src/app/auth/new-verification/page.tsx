import LoginForm from "@/components/forms/login-form";
import OAuthForm from "@/components/forms/o-auth-form";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {getVerificationTokenByToken} from "@/data/verification-token";
import {redirect} from "next/navigation";
import {Icons} from "@/components/icons";
import {toast} from "sonner";

export default async function Page({ searchParams }: { searchParams: { token: string } }) {
    const verificationToken = await getVerificationTokenByToken(searchParams.token);

    /*if (!verificationToken) {
        toast("error", {
            description: "The verification link is not valid.",
        })
    }

    if (verificationToken && new Date(verificationToken.expires) > new Date()) {
        toast("error", {
            description: "The verification link has expired.",
        })
    }

    if (verificationToken && new Date(verificationToken.expires) < new Date()) {
        // delete the token
        // add emailVerified date to the user
        toast("success", {
            description: "Your email has been verified.",
        })
    }*/

    //redirect('/dashboard');
}
