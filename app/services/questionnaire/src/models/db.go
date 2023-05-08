package models

import (
	"context"
	"github.com/jackc/pgx/v4/pgxpool"
	"os"
)

func ConnectDB(ctx context.Context) (*pgxpool.Pool, error) {
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		dsn = "postgresql://gabuntu:gabuntuPassword@db:5432/mydb"
	}

	poolConfig, err := pgxpool.ParseConfig(dsn)
	if err != nil {
		return nil, err
	}

	pool, err := pgxpool.ConnectConfig(ctx, poolConfig)
	if err != nil {
		return nil, err
	}

	return pool, nil
}
