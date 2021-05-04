GRANT ALL ON *.* TO 'root'@'%';
CREATE DATABASE IF NOT EXISTS nodedb;
USE nodedb;
CREATE TABLE IF NOT EXISTS courses (id int not null AUTO_INCREMENT, name varchar(255), PRIMARY KEY (id));
DELETE FROM courses;
INSERT INTO courses(name) values ("Docker"), ("Padrões e técnicas avançadas com Git e Github"), ("Integração contínua");
COMMIT;