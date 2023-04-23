#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    \i '/docker-entrypoint-initdb.d/migrations/001_create_users.sql'
    \i '/docker-entrypoint-initdb.d/migrations/002_create_questionnaires.sql'
    \i '/docker-entrypoint-initdb.d/migrations/003_create_questions.sql'
    \i '/docker-entrypoint-initdb.d/migrations/004_create_answers.sql'
    \i '/docker-entrypoint-initdb.d/migrations/005_create_results.sql'
EOSQL