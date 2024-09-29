/*Je ne vais plus utiliser les scripts db:create:sql/db:seed/db:reset 
 du package.json. C'était dans le but de réviser un peu SQL. J'utiliserai Sequelize pour la suite du projet*/
BEGIN;
DROP TABLE IF EXISTS "list",
"card",
"tag";
CREATE TABLE "list" (
    "title" TEXT NOT NULL,
    "position" INTEGER DEFAULT 1
);
CREATE TABLE "card" (
    "content" TEXT,
    "position" INTEGER,
    "color" TEXT DEFAULT '#ffffff'
);
CREATE TABLE "tag" (
    "name" TEXT NOT NULL UNIQUE,
    "color" TEXT DEFAULT '#ffffff'
);
COMMIT;