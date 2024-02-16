'use client';

import {signOut} from "next-auth/react";
import {Button} from "@/components/ui/button";

export default function LogoutButton() {
    return (
        <Button onClick={async () => {
            await signOut();
        }}>Logout</Button>
    )
}