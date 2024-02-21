/*
  Warnings:

  - Added the required column `email` to the `VerificationToken` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VerificationToken" (
    "identifier" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);
INSERT INTO "new_VerificationToken" ("expires", "identifier", "token") SELECT "expires", "identifier", "token" FROM "VerificationToken";
DROP TABLE "VerificationToken";
ALTER TABLE "new_VerificationToken" RENAME TO "VerificationToken";
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
