/*
  Warnings:

  - You are about to drop the column `hash` on the `ShortcodeProps` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ShortcodeProps" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "component" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "props" TEXT NOT NULL
);
INSERT INTO "new_ShortcodeProps" ("component", "id", "props", "version") SELECT "component", "id", "props", "version" FROM "ShortcodeProps";
DROP TABLE "ShortcodeProps";
ALTER TABLE "new_ShortcodeProps" RENAME TO "ShortcodeProps";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
