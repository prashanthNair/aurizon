# Building RESTful Web APIs with Node.js, Express, MYSQL2, MongoDB, TypeScript and Swagger-express-ui

This is a simple API for Aurizon assessment. 

The project is updated in below github repository

https://github.com/prashanthNair/Aurizon: you can run the server directly after cloning this version. It will create a simple RESTful API over HTTP.  

## System Setup

NOdeJS
TypeScript and Typescript Node  
MongoDB 
MySql

## Clone this repository 

git clone https://github.com/prashanthNair/Aurizon

Then install the dependencies 

npm install 

## DataBase

MySql
MongoDB - Used only for logging.

All Api's are depended with the database.

For MySql, Please run the scripts from db_scripts folder (https://github.com/prashanthNair/Aurizon/tree/master/Aurizon-backend/db_scripts)

## MySql Config

Please provide vaild Mysql user and password details in src\configuration\db.config.ts

Example :

host: 'localhost'
user: 'root'
password: 'Password@1'

## Build

npm run build

## run test

npm run test

## Start the server

npm start

The default URL is: *http://localhost:3000*

## Swagger api docs

URL : *http://localhost:3000/api-docs*

