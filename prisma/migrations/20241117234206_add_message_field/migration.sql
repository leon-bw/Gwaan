/*
  Warnings:

  - Added the required column `message` to the `ContactForm` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ContactForm" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_ContactForm" ("createdAt", "email", "id", "name", "reason") SELECT "createdAt", "email", "id", "name", "reason" FROM "ContactForm";
DROP TABLE "ContactForm";
ALTER TABLE "new_ContactForm" RENAME TO "ContactForm";
CREATE UNIQUE INDEX "ContactForm_email_key" ON "ContactForm"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
