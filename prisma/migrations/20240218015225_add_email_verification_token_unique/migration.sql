/*
  Warnings:

  - A unique constraint covering the columns `[email,token]` on the table `VerificationToken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_email_token_key" ON "VerificationToken"("email", "token");
