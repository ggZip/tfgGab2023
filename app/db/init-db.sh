#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    \i '/docker-entrypoint-initdb.d/migrations/users/001_create_users_table.sql'
    \i '/docker-entrypoint-initdb.d/migrations/questionnaires/001_create_questionnaires_table.sql'
    \i '/docker-entrypoint-initdb.d/migrations/realtestscores/001_create_realtestscores_table.sql'
EOSQL