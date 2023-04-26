CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);
