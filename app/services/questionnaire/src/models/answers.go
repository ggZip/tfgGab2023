package models

import (
	"context"
	"github.com/jackc/pgx/v4/pgxpool"
)

type Answer struct {
	ID         int64   `json:"id"`
	AnswerText string  `json:"answer_text"`
	Weight     float64 `json:"weight"`
}

func FetchAnswersByQuestionID(ctx context.Context, db *pgxpool.Pool, questionID int64) ([]Answer, error) {
	answers := []Answer{}

	rows, err := db.Query(ctx, "SELECT id, answer_text, weight FROM answers WHERE question_id = $1", questionID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		answer := Answer{}
		err := rows.Scan(&answer.ID, &answer.AnswerText, &answer.Weight)
		if err != nil {
			return nil, err
		}
		answers = append(answers, answer)
	}

	return answers, nil
}
