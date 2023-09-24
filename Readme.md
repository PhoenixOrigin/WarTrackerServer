# War Tracker Server
A simple express server to listen and commit incoming wars to database

# Steps to use
1. Setup PSQL. On an ubuntu server, this can be as simple as `sudo apt-get install postgresql`
2. Open the PSQL interface using the command `psql` on your server
3. Run the following commands in order
```
CREATE TYPE TOWER AS (
    health            numeric,
    defense           DOUBLE PRECISION,
    attack_low        numeric,
    attack_high       numeric,
    attack_speed      DOUBLE PRECISION
);
```
```
CREATE TABLE wars (
    uuid TEXT PRIMARY KEY,
    war_members TEXT,
    territory_name TEXT,
    territory_owner TEXT,
    start BIGINT,
    start_tower TOWER,
    end_tower TOWER
);
```
4. Clone this repository using `git clone https://github.com/PhoenixOrigin/WarTrackerServer/`
5. Run `cd ./WarTrackerServer`
6. Run `npm i`
7. Run `pm2 start ./index.js --name WarTrackerBackend`

The server should be running now. To check the status, run `pm2 ls`. To view logs, do `pm2 logs WarTrackerBackend`. To interact with the console, find the ID using `pm2 ls` then run `pm2 attach id`

# TODO
Add validation using Wynncraft API
