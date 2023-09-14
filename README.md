## API JSON com Express

## Comandos úteis

## GIT
```
git --version
```
Verifica a versão do git instalada
Dois comandos que fará uma única vez na configuração do usuário p/ fazer os commits do git
```
git config --global user.name "Fulaninha"
```
```
git config --global user.emai "fdfggGfdfg@com"
```
Inicializa o GIT em uma pasta nova
```
git init
```
Situação do git na pasta atual
```
git status
```
Vincula seu repositório do github a pasta local
```
git remote add origin https://github.com/taticar/api-node-express.git
```
Status do arquivo
```
U - untrack (novo)
M - modified (modificado)
D - Deletado
```
Passa os arquivos no stage
```
git add .
```
Passa do stage para o commit
```
git commit -m "comentários"
```
Passa para o github (nuvem)
```
git push
```
Obs.:
Na primeira vez use o comando abaixo invês do git push
```
git push --set-upstream origin master
```
Abrir o projeto em computador que não o contém, comando dentro da pasta que quero salvar no cmd ou terminal (projeto inteiro)
```
C:\Users\cg3025039\Development> git clone https://github.com/taticar/api-node-express.git
```
Baixar as atualizações feita em outros sítios (somente atualizações)
```
git pull
```
Verificar se tem atualizações.
```
git fetch
```



## Node
```
node --v
```
Verifica a versão do node instalado

## NPM (Node Package Manager)
```
npm -v
```
Inicializa o gerenciador de pacotes em um novo projeto.
```
npm init
```
Instala um novo pacote (inclusive pasta json)
```
npm i [nome-do-pacote]
```
Rodar os scripts do package json
```
npm run [nome do script]
```

Diferença entre import e require, basicamente a mesma coisa.
-package.json
"main": "src/server.js",
"type": "module",
//Estamos dizendo que ao invés do require usaremos o module.
-server.js
//const express = require('express'); trocar modulo de importação
import express from 'express'

## MVC (Model Views Control)

M model: guarda regras do projeto

V views: visualização

C control: comanda/controla

DB banco de dados: 

## Teste INSOMNIA

server.js => router => controllers => model => mysql

GET /user pega os dados em JSON usaremos o MIDDLEWARE(converte JSON em String) - no server.js 
//converte toda requisiçao com body json para objeto salvo no req.body
import bodyParser from 'body-parser'; 
api.use(bodyParser.json())

## Definições básicas


Node: ambiente de execução do javascript fora do navegador(runtime).
NPM: gerenciador de pacotes do ambiente NODE, ajuda adicionar e remover pacotes e iniciar projetos.
Framework: conjuntos de recursos (bibliotecas) prontos para resolver problemas.
{
Express: 
Nodemon: monitora as mudanças nos arquivos do seu projeto e reinicia automaticamente o servidor Node. js quando necessário
Bootstrap:
package.json: arquivo de um projeto javascript que é responsável por guardar informações, scripts e controle de versionamento de bibliotecas do projetos e gerenciar dependências.
}
API: interface de programa de aplicação, interface de comunicação entre os programas, trata-se de um conjunto de rotinas e padrões estabelecidos e documentados por uma aplicação A, para que outras aplicações consigam utilizar as funcionalidades desta aplicação A, sem precisar conhecer detalhes da implementação do software.
REST é um conjunto de princípios e restrições de arquitetura de softwares,  principal protocolo de comunicação para sistemas Web. 
RESTFUL: Conjunto de rotas e metódos para criação de uma API RESTful é aquela que está em conformidade com os critérios estabelecidos pela Transferência de Estado Representacional (REST).
{
    ```GET - POST - PUT - DELETE```
    GET: rotas para obter informações.
    POST: rotas para enviar dados do banco
    PUT: rotas para atualizar já existentes.
    DELETE: rotas para deletar dados já existentes.
    PATCH: 
}
MVC: padrão de arquitetura de software responsável por contribuir na otimização da velocidade entre as requisições feitas pelo comando dos usuários, divide meu software em camadas.
    ``` Model View Control ```
        Model: regras de negócio e interação com o banco, responsável pelo acesso e manipulação dos dados.
        View: é responsável pela interface que será apresentada, mostrando as informações do model para o usuário.
        Control: responsável por ligar o model e a view, fazendo com que os models possam ser repassados para as views e vice-versa.

MIDLEWARE: middleware no Express é a maneira de fazer alguma coisa antes da requisição ser processada. Coisas como verificar se o usuário está autenticado, logar algum dado para análise ou qualquer coisa que precise ser feita antes de devolver uma resposta para a requisição.

Sequencia de criação
npm init -> npm i -> criar pasta src -> criar arquivo server.js -> modificar modo de import/export (package.json )

