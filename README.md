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
Instala um novo pacote
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








