'use client';

import {Button} from "@/components/ui/button";
import {logout} from "@/actions/auth";

export default function LogoutButton() {
  return (
    <Button onClick={async () => {
      await logout();
    }}>Logout</Button>
  )
}