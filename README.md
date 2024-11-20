Naiara Aparecida da Silva Cruz
Thais da Silva Pereira 

Rodar o Back-End:

Certifique-se de ter instalado:
Java JDK (versão 11 ou superior).
Maven (caso não utilize os scripts mvnw fornecidos no projeto).

No terminal:
Navegue até o diretório Back/monitoramento.
Execute os seguintes comandos:

Para compilar o projeto:
./mvnw clean install
ou, no Windows:
mvnw.cmd clean install

Para iniciar a aplicação:
./mvnw spring-boot:run
ou, no Windows:
mvnw.cmd spring-boot:run

Verifique no terminal a porta onde o servidor está rodando http://localhost:8080/. 
Rodar o Front-End:

Certifique-se de que o back-end já está rodando.

No terminal:
Navegue até o diretório Front.
Abra o arquivo index.html no navegador para testar rapidamente ou:
Use um servidor local, como o Live Server no VS Code, para melhor suporte a rotas e arquivos.

Caso use um servidor local:
Configure o servidor para apontar para o diretório Front.


Importante:
O back-end precisa ser iniciado antes do front-end, pois este depende das APIs do back-end para carregar dados dinâmicos, como gráficos ou tabelas.
O front-end se conecta ao back-end por meio de requisições para endpoints REST. Certifique-se de que o back-end está funcionando corretamente para evitar erros no carregamento da interface.

Explicação breve da solução;

A solução é uma plataforma web interativa para monitoramento e otimização do consumo de energia, promovendo sustentabilidade e eficiência. Oferece:

Monitoramento em tempo real com gráficos de consumo.
Recomendações personalizadas para reduzir desperdícios.
Alertas de consumo em níveis críticos.
Interface responsiva e sustentável com design minimalista.
O sistema é integrado a um back-end em Spring Boot, garantindo dados em tempo real e acessibilidade em diversos dispositivos.

link do video pitch:

https://youtu.be/n4TUSyBLvaE
