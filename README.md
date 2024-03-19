# Welcome to Flights Service

## Project Setup
- clone the project on your local.
- Execute `npm install` on the same path as of your root directory of the downloaded project.
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT = 3000`
    - `DB_SYNC = false` -> for syncing the database initially make it true , after executing once change it to 
      false because we don't want to do syncing every time we start the server.
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": "<database_username>",
    "password": "<database_password>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "<database_name (example-> mysql) >"
  }
}
```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`

- After creating database by executing above command , now create all the tables by executing `npx sequelize db:migrate:all`

```
- DB Design
  - Airplane Table
  - Flight Table
  - Airport Table
  - City Table

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport
```
- Finally, Run the `npm start` in the root directory to run the Server.
