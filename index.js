const express = require('express');
const config = require('config');
const app = express();
const port = config.get('server.port');
const host = config.get('server.host');

import { Client } from 'pg';
const client = new Client({
    user: config.get('database.user'),
    password: config.get('database.password'),
    host: config.get('database.host'),
    port: config.get('database.port'),
    database: config.get('database.db-name')
});
await client.connect();

app.post('/war', async (req, res) => {
    const query = {
        text: "INSERT INTO wars (uuid, war_members, territory_name, territory_owner, start, start_tower, end_tower, timestamp) VALUES($1, $2, $3, $4, $5, ROW($6, $6, $7, $8, $9), ROW($10, $11, $12, $13, $14), to_timestamp($15  / 1000.0))",
        values: [
            req.header("X-Minecraft-UUID"),
            req.body.warMembersUUID,
            req.body.territoryName,
            req.body.territoryOwner,
            req.body.startTime,
            req.body.start.health,
            req.body.start.defense,
            req.body.start.attack_low,
            req.body.start.attack_high,
            req.body.start.attack_speed,
            req.body.end.health,
            req.body.end.defense,
            req.body.end.attack_low,
            req.body.end.attack_high,
            req.body.end.attack_speed,
            Date.now()
        ]
    };

    const response = await client.query(query);
    res.sendStatus(200);
})
const server = app.listen(port, host, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
});