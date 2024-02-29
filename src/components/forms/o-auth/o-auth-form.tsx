'use client';

import GithubButton from "@/components/forms/o-auth/github-button";
import GoogleButton from "@/components/forms/o-auth/google-button";

export default function OAuthForm() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <GithubButton />
      <GoogleButton />
    </div>
  )
}