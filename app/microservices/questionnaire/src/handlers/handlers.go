package handlers

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/tu_usuario/questionnaire/src/models"
	"github.com/jackc/pgx/v4/pgxpool"
)

func GetQuestionnaire(db *pgxpool.Pool) echo.HandlerFunc {
	return func(c echo.Context) error {
		questions, err := models.FetchQuestionnaire(db)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, err.Error())
		}

		return c.JSON(http.StatusOK, questions)
	}
}
