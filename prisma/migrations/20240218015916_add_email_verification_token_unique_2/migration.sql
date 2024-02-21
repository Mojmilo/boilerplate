/*
  Warnings:

  - You are about to drop the column `identifier` on the `VerificationToken` table. All the data in the column will be lost.
  - The required column `id` was added to the `VerificationToken` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VerificationToken" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);
INSERT INTO "new_VerificationToken" ("email", "expires", "token") SELECT "email", "expires", "token" FROM "VerificationToken";
DROP TABLE "VerificationToken";
ALTER TABLE "new_VerificationToken" RENAME TO "VerificationToken";
CREATE UNIQUE INDEX "VerificationToken_email_key" ON "VerificationToken"("email");
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
