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
    avatar VARCHAR(300),
    last_activity_time VARCHAR(16)
);

create table posts (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    user_id VARCHAR(10) NOT NULL,
    text VARCHAR(500),
    image VARCHAR(300),
    date VARCHAR(30) NOT NULL,
    likes_count VARCHAR(10),
    comments_count VARCHAR(10)
);

create table posts_likes (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    author_id VARCHAR(10) NOT NULL,
    post_id VARCHAR(10) NOT NULL,
    user_id VARCHAR(10) NOT NULL,
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    avatar VARCHAR(300),
    last_activity_time VARCHAR(16)
);

create table comments (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    post_id VARCHAR(10) NOT NULL,
    user_id VARCHAR(10) NOT NULL,
    last_activity_time VARCHAR(16),
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    text VARCHAR(500),
    avatar VARCHAR(300),
    image VARCHAR(300),
    date VARCHAR(30) NOT NULL,
    likes_count VARCHAR(10)
);

create table comments_likes (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    author_id VARCHAR(10) NOT NULL,
    comment_id VARCHAR(10) NOT NULL,
    user_id VARCHAR(10) NOT NULL,
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    avatar VARCHAR(300),
    last_activity_time VARCHAR(16)
);