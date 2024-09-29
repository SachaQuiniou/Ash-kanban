--Données de test pour la BDD
BEGIN;
INSERT INTO "lists" ("title", "position")
VALUES ('Example de list', 1);
INSERT INTO "cards" ("content", "position", "color")
VALUES ('Example de contenu', 1, '#fafafa');
INSERT INTO "tags" ("name", "color")
VALUES ('Urgent', '#dc2626'),
    ('En retard', '#eab308');
COMMIT;