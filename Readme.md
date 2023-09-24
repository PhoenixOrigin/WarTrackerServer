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
    end_tower TOWER,
    timestamp timestamp
);
```