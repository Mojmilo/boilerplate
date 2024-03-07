/*
  Warnings:

  - Added the required column `addressId` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentMethodId` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Subscription" ADD COLUMN     "addressId" TEXT NOT NULL,
ADD COLUMN     "paymentMethodId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Subscription" ADD CONSTRAINT "Subscription_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "public"."PaymentMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Subscription" ADD CONSTRAINT "Subscription_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
