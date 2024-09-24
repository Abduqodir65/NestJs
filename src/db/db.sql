CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    year INTEGER NOT NULL,
    rating NUMERIC(2,1) NOT NULL DEFAULT 4.5
)

INSERT INTO movies(name, year, rating) VALUES ('Abdullajon',1990,4.5),('Shum bola',1999,4.7)

CREATE TABLE cars(
    id SERIAL PRIMARY KEY,
    brand VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    year INTEGER NOT NULL,
    doors INTEGER NOT NULL,
    vehicles INTEGER NOT NULL,
    daily_price INTEGER NOT NULL
);

INSERT INTO cars(model,brand,year,doors,vehicles,daily_price) VALUES('BMW','M4',2024,4,4,500);


CREATE TABLE customers(
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL
);

INSERT INTO customers(full_name,surname,age) VALUES('Abduqodir','Yuldashev',15);


CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    car_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    start_time VARCHAR NOT NULL,
    finish_time VARCHAR NOT NULL,
    total_amount INTEGER NOT NULL,
    FOREIGN KEY (car_id) REFERENCES cars(id) ON DELETE CASCADE, 
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);


INSERT INTO orders (car_id, customer_id, start_time, finish_time, total_amount) VALUES
(1, 1, '2024-09-01 10:00:00', '2024-09-05 10:00:00', 50000);
