1 - Network

- execute `docker network create desafio-pfa-1`

1 - Mysql
- execute `docker run -d --name db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=nodedb --network desafio-pfa-1 -v "$(pwd)"/mysql:/usr/src/app mysql:5.7`
- execute `docker exec -it db bash -c "mysql -u root -p"`
- execute senha `root`
- execute `use nodedb;`
- execute `CREATE TABLE IF NOT EXISTS courses (id int not null AUTO_INCREMENT, name varchar(255), PRIMARY KEY (id));`
- execute `exit`

2 - Node

- execute `docker build -t nodeserver app`
- execute `docker run -d --name app --network desafio-pfa-1 -v "$(pwd)"/app:/usr/src/app nodeserver bash -c "npm install && node index.js"`

3 - Nginx

- execute `docker build -t nginx nginx`
- execute `docker run -dp 8080:80 --name nginx --network desafio-pfa-1 -v "$(pwd)"/app:/usr/src/app nginx`

4 - Resultado

- Abra o navegador na `http://localhost:8080`