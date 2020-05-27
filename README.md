# choresapp

An app for logging chores with MYSQL. Each chore is displayed with a timestamp. You can edit and delete chores as well, of course.

## Database

Scripts for creating the database and the table can be found in scripts > mysql

```
mysql -u käyttäjä_nimi -p  < scripts/mysql/create_db.sql
mysql -u käyttäjä_nimi -p  < scripts/mysql/create_chores.sql
```
Username and password are found in the index.js, although normally I would not do this (not really a risk for this assignment though).

## Running the app

Run the app with

```
npm start
```

Open at localhost:3000




