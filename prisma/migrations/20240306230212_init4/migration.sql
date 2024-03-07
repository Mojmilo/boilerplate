/*
  Warnings:

  - The values [month,year] on the enum `PlanInterval` will be removed. If these variants are still used in the database, this will fail.
  - The values [free,basic,premium] on the enum `PlanType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."PlanInterval_new" AS ENUM ('MONTH', 'YEAR');
ALTER TABLE "public"."Plan" ALTER COLUMN "interval" TYPE "public"."PlanInterval_new" USING ("interval"::text::"public"."PlanInterval_new");
ALTER TYPE "public"."PlanInterval" RENAME TO "PlanInterval_old";
ALTER TYPE "public"."PlanInterval_new" RENAME TO "PlanInterval";
DROP TYPE "public"."PlanInterval_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."PlanType_new" AS ENUM ('FREE', 'BASIC', 'PREMIUM');
ALTER TABLE "public"."Plan" ALTER COLUMN "type" TYPE "public"."PlanType_new" USING ("type"::text::"public"."PlanType_new");
ALTER TYPE "public"."PlanType" RENAME TO "PlanType_old";
ALTER TYPE "public"."PlanType_new" RENAME TO "PlanType";
DROP TYPE "public"."PlanType_old";
COMMIT;
