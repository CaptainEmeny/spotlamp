-- Used to create the prisma database

CREATE TABLE Stylists (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  name         TEXT    NOT NULL,
  location     TEXT    NOT NULL,
  specialties  TEXT    NOT NULL CHECK (specialties IN ('Braids', 'Curly Hair', 'Color', 'Extensions', 'Barber', 'Locs', 'Natural Hair', 'Bridal', 'Extensions', 'Haircuts')),
  bio          TEXT    NOT NULL
);