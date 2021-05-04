- Clone este repositório
- Abra o terminal na pasta `desafio01`, será a referência para os comandos que necessitam de localização
- Características do sistema final
    - Criar 3 imagens(Nginx, App, MySQL 5.7) e 1 Network(desafio-pfa-1)
    - O Nginx fará o proxy reverso do app na porta `8080`
    - O App não será mapeado em porta alguma do navegador

1 - Network

- execute `docker network create desafio-pfa-1`

2 - Mysql
- execute `docker run -d --name db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=nodedb --network desafio-pfa-1 mysql:5.7`

3 - Node

- execute `docker run -d --name app --network desafio-pfa-1 042821/desafio01:node-v2`

4 - Nginx

- execute `docker run -dp 8080:80 --name nginx --network desafio-pfa-1 042821/desafio01:nginx-v2`

5 - Resultado

- Abra o navegador na `http://localhost:8080`