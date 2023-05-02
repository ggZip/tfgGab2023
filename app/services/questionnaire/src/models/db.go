package models

import (
	"context"
	"github.com/jackc/pgx/v4/pgxpool"
)

const dsn = "postgresql://gabuntu:gabuntuPassword@db:5432/mydb"

func ConnectDB() (*pgxpool.Pool, error) {
	poolConfig, err := pgxpool.ParseConfig(dsn)
	if err != nil {
		return nil, err
	}

	pool, err := pgxpool.ConnectConfig(context.Background(), poolConfig)
	if err != nil {
		return nil, err
	}

	return pool, nil
}
