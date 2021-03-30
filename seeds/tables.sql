DROP DATABASE IF EXISTS blogtech_db;
CREATE DATABASE blogtech_db;

USE blogtech_db;

CREATE TABLE user(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(128) NOT NULL,
    createdAt DATE, 
    updatedAt DATE
);

CREATE TABLE post(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES user(id),
    title VARCHAR(100) NOT NULL,
    body VARCHAR(255) NOT NULL,
    createdAt DATE, 
    updatedAt DATE
);

CREATE TABLE comment(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES user(id),
    post_id INT NOT NULL,
    FOREIGN KEY(post_id) REFERENCEs post(id),
    createdAt DATE, 
    updatedAt DATE
);

CREATE TABLE Session(
    sid VARCHAR(36) PRIMARY KEY,
    expires DATETIME,
    data TEXT,
    createdAt DATE,
    updatedAt DATE
);


