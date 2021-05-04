- Clone este repositório
- Abra o terminal na pasta `desafio02`, será a referência para os comandos que necessitam de localização
- Características do sistema final
    - Criar 3 imagens(Nginx, App, MySQL 5.7) e 2 Networks(app-network, db-network)
    - O Nginx fará o proxy reverso do app na porta `8000`
    - O App não será mapeado em porta alguma do navegador

1 - Network

- execute `docker-compose up -d`

2 - Resultado

- Abra o navegador na `http://localhost:8000`