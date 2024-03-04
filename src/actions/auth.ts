'use server';

import {signIn, signOut} from "@/auth";
import {AuthError} from "next-auth";

export async function authenticateEmail(email: string) {
  try {
    await signIn('email', { email });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
      case 'CredentialsSignin':
        return 'Invalid credentials.';
      default:
        return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function authenticateGithub() {
  try {
    await signIn('github');
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
      case 'CredentialsSignin':
        return 'Invalid credentials.';
      default:
        return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut();
}