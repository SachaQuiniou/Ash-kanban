BEGIN;
DROP TABLE IF EXISTS "lists",
"cards",
"tags";
CREATE TABLE "lists" (
    "title" TEXT NOT NULL,
    "position" INTEGER DEFAULT 1
);
CREATE TABLE "cards" (
    "content" TEXT,
    "position" INTEGER,
    "color" TEXT DEFAULT '#ffffff'
);
CREATE TABLE "tags" (
    "name" TEXT NOT NULL UNIQUE,
    "color" TEXT DEFAULT '#ffffff'
);
COMMIT;