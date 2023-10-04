--start the PostgreSQL command-line utility called "psql" and connect to a PostgreSQL database named "postgres."
psql postgres

--Create 'blogs' dababase
CREATE DATABASE blogs;

--Connect to 'blogs' database
\c blogs;

--Create authors table

CREATE TABLE authors (
  author_id SERIAL PRIMARY KEY, 
  author_name VARCHAR(50) NOT NULL, 
  author_email TEXT, 
  author_funfact TEXT
);

--Insert new entity/row in authors table
  --no double quotes

INSERT INTO authors (
  author_name, 
  author_email, 
  author_funfact
) 
  VALUES (
  'Whitney-Rene', 
  'spainWR@gmail.com', 
  'W-R live in Aracena & Granada, over the course of 2 years'
);

--create blogspot table
CREATE TABLE blogpost (blog_id SERIAL PRIMARY KEY, blog_title VARCHAR (50) NOT NULL, blog_content TEXT NOT NULL, blog_publishdate DATE DEFAULT CURRENT_DATE, blog_picture TEXT, author_id INT REFERENCES authors(author_id));

--Insert new entity/row in blogpost table
  --no double quotes
INSERT INTO blogpost (blog_title, blog_content, blog_picture, author_id) VALUES ('Nerja', 'will fill in later', 'https://www.shoreexcursionsgroup.com/img/tour/EUMGNERJA-2.jpg', 1);

INSERT INTO blogpost (blog_title, blog_content, blog_picture, author_id) VALUES ('Aracena', 'will fill in later', 'https://i.pinimg.com/originals/35/33/69/353369a84e56728a0108996b34e21901.jpg', 1);

INSERT INTO blogpost (blog_title, blog_content, blog_picture, author_id) VALUES ('Madrid', 'will fill in later', 'https://media.cntraveler.com/photos/5b2d15c98b842c3b35c5d3c7/1:1/w_2667,h_2667,c_limit/Madrid-Beaches_GettyImages-731843465.jpg', 1);

--quit postgres
\q