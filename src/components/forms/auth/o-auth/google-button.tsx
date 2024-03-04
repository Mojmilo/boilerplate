'use client';

import {Icons} from "@/components/icons";
import {Button} from "@/components/ui/button";

const GoogleButton = () => {
  return (
    <Button variant="outline" disabled>
      <Icons.google className="mr-2 h-4 w-4" />
      Google
    </Button>
  )
}

export default GoogleButton;