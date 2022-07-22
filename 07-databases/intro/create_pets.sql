CREATE TABLE pets (
    id INTEGER PRIMARY KEY,
    name TEXT,
    breed TEXT,
    age INTEGER
);

-- seed data
INSERT INTO pets (id, name, breed, age) VALUES (1, 'Donut', 'Beagle', 1);
INSERT INTO pets (id, name, breed, age) VALUES (2, 'Gigantor', 'Robot', 1001);