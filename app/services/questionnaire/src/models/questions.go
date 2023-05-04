package models

import (
	"context"
	"github.com/jackc/pgx/v4/pgxpool"
)

type Question struct {
	ID           int64  `json:"id"`
	QuestionText string `json:"question_text"`
	Answers      []Answer `json:"answers"`
}

func FetchQuestionnaire(ctx context.Context, db *pgxpool.Pool) ([]Question, error) {
	questions := []Question{}

	rows, err := db.Query(ctx, "SELECT id, question_text FROM questions")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		question := Question{}
		err := rows.Scan(&question.ID, &question.QuestionText)
		if err != nil {
			return nil, err
		}

		answers, err := FetchAnswersByQuestionID(ctx, db, question.ID)
		if err != nil {
			return nil, err
		}
		question.Answers = answers

		questions = append(questions, question)
	}

	return questions, nil
}
