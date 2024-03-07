/*
  Warnings:

  - Added the required column `type` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."PlanType" AS ENUM ('free', 'basic', 'premium');

-- AlterTable
ALTER TABLE "public"."Plan" ADD COLUMN     "type" "public"."PlanType" NOT NULL;
