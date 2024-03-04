'use client';

import {authenticateGithub} from "@/actions/auth";
import {Icons} from "@/components/icons";
import {Button} from "@/components/ui/button";
import {useState} from "react";

const GithubButton = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Button variant="outline" disabled={loading} onClick={async () => {
      setLoading(true);
      await authenticateGithub();
    }}>
      {loading ? <Icons.spinner className="animate-spin mr-2 h-4 w-4" /> : <Icons.gitHub className="mr-2 h-4 w-4" />}
      Github
    </Button>
  )
}

export default GithubButton;