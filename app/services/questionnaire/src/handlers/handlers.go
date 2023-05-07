package handlers

import (
	"net/http"
	"strconv"
	"github.com/labstack/echo/v4"
	"github.com/tu_usuario/questionnaire/src/models"
	"github.com/jackc/pgx/v4/pgxpool"
)

type QuestionnaireHandler struct {
	DB *pgxpool.Pool
}

func NewQuestionnaireHandler(db *pgxpool.Pool) *QuestionnaireHandler {
	return &QuestionnaireHandler{
		DB: db,
	}
}

func (h *QuestionnaireHandler) GetQuestionnaire(c echo.Context) error {
	ctx := c.Request().Context()
	questions, err := models.FetchQuestionnaire(ctx, h.DB)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	return c.JSON(http.StatusOK, questions)
}

func (h *QuestionnaireHandler) GetUserQuestionnaires(c echo.Context) error {
	ctx := c.Request().Context()
	userID, err := strconv.ParseInt(c.Param("user_id"), 10, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, "Invalid user ID")
	}

	questionnaires, err := models.FetchUserQuestionnaires(ctx, h.DB, userID)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	return c.JSON(http.StatusOK, questionnaires)
}