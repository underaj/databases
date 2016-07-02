CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  /* Describe your table here.*/
  u_id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (u_id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  m_id INT NOT NULL AUTO_INCREMENT,
  message VARCHAR(100) NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (m_id),
  FOREIGN KEY (user_id) REFERENCES users(u_id)
);




/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

