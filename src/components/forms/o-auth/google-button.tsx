'use client';

import {Icons} from "@/components/icons";
import {Button} from "@/components/ui/button";

export default function GoogleButton() {
  return (
    <Button variant="outline" disabled>
      <Icons.google className="mr-2 h-4 w-4" />
      Google
    </Button>
  )
}