'use client';

import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";

export default function OAuthForm() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">Sign in with</h1>
                <div className="flex items-center justify-center space-x-4">
                    <Button>Google</Button>
                    <Button onClick={async () => {
                        await signIn("github");
                    }}>GitHub</Button>
                </div>
            </div>
        </div>
    )
}