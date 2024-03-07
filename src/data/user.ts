'use server';

import {auth} from "@/auth";
import prisma from "@/lib/db";
import {PlanType} from "@prisma/client";

export async function getUser() {
  const session = await auth();

  if (!session || !session.user) {
    return null;
  }

  return prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });
}

export async function getProfileByUserId(userId: string) {
  return prisma.profile.findUnique({
    where: {
      userId,
    },
  });
}

export async function getAddressesByUserId(userId: string) {
  return prisma.address.findMany({
    where: {
      userId,
    },
  });
}

export async function getPaymentMethodsByUserId(userId: string) {
  return prisma.paymentMethod.findMany({
    where: {
      userId,
    },
  });
}

export async function getSubscriptionsByUserId(userId: string) {
  return prisma.subscription.findMany({
    where: {
      userId,
    },
  });
}

export async function getCurrentSubscriptionByUserId(userId: string) {
  return prisma.subscription.findFirst({
    where: {
      userId,
      status: 'active',
    },
  });
}

export async function getPlanById(id: string) {
  return prisma.plan.findUnique({
    where: {
      id,
    },
  });
}

export async function getAddressById(id: string) {
  return prisma.address.findUnique({
    where: {
      id,
    },
  });
}

export async function getPaymentMethodeById(id: string) {
  return prisma.paymentMethod.findUnique({
    where: {
      id,
    },
  });
}

export async function test() {
  const test = await getPlanById("1");

  switch (test?.name) {
  case PlanType.FREE:
    break;
  }
}