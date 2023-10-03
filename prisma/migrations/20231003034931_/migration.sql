-- CreateTable
CREATE TABLE "ShortcodeProps" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "component" TEXT NOT NULL,
    "version" REAL NOT NULL,
    "hash" TEXT NOT NULL,
    "props" TEXT NOT NULL
);
