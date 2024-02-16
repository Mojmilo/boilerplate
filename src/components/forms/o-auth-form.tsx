'use client';

import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";
import {Icons} from "@/components/icons";

export default function OAuthForm() {
    return (
        <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" onClick={async () => {
                await signIn("github");
            }}>
                <Icons.gitHub className="mr-2 h-4 w-4" />
                Github
            </Button>
            <Button variant="outline">
                <Icons.google className="mr-2 h-4 w-4" />
                Google
            </Button>
        </div>
    )
}