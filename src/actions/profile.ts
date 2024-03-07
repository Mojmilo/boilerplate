'use server';

import {getUser} from "@/data/user";
import prisma from "@/lib/db";
import {ProfileSchema} from "@/schemas/profile";
import {revalidatePath} from "next/cache";

export async function createProfile(profile: ProfileSchema) {
  const user = await getUser();

  if (!user) {
    return null;
  }

  await prisma.profile.create({
    data: {
      ...profile,
      userId: user.id,
    }
  });

  revalidatePath('/profile');
}