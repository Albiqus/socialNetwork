create table users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    country VARCHAR(20),
    city VARCHAR(30),
    phone VARCHAR(12),
    date_of_birth VARCHAR(10),
    gender VARCHAR(7) NOT NULL,
    marital_status VARCHAR(10) NOT NULL,
    secret_key VARCHAR(20) NOT NULL,
    status VARCHAR(150),
    avatar_big VARCHAR(300),
    avatar_average VARCHAR(300),
    avatar_small VARCHAR(300)
);