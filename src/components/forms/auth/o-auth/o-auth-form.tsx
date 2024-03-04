'use client';

import GithubButton from "@/components/forms/auth/o-auth/github-button";
import GoogleButton from "@/components/forms/auth/o-auth/google-button";

const OAuthForm = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <GithubButton />
      <GoogleButton />
    </div>
  )
}

export default OAuthForm;