package models

import (
	"context"
	"github.com/jackc/pgx/v4/pgxpool"
	"time"
)

type UserQuestionnaire struct {
	ID            int64   `json:"id"`
	UserID        int64   `json:"user_id"`
	CalculatedMark float64 `json:"calculated_mark"`
	RealMark      *float64 `json:"real_mark"`
	CreatedAt     time.Time `json:"created_at"`
}

func FetchUserQuestionnaires(ctx context.Context, db *pgxpool.Pool, userID int64) ([]UserQuestionnaire, error) {
	questionnaires := []UserQuestionnaire{}

	rows, err := db.Query(ctx, "SELECT id, user_id, calculated_mark, real_mark, created_at FROM questionnaire WHERE user_id = $1", userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		questionnaire := UserQuestionnaire{}
		err := rows.Scan(&questionnaire.ID, &questionnaire.UserID, &questionnaire.CalculatedMark, &questionnaire.RealMark, &questionnaire.CreatedAt)
		if err != nil {
			return nil, err
		}
		questionnaires = append(questionnaires, questionnaire)
	}

	return questionnaires, nil
}