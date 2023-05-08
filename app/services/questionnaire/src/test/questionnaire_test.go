package src_test

import (
	"context"
	"testing"
	"github.com/stretchr/testify/assert"
	"github.com/tu_usuario/questionnaire/src/handlers"
	"github.com/tu_usuario/questionnaire/src/models"
	"github.com/labstack/echo/v4"
	"net/http"
	"net/http/httptest"
	"strings"
)

func TestGetQuestionnaire(t *testing.T) {
	ctx := context.Background()
	db, err := models.ConnectDB(ctx)
	if err != nil {
		t.Fatalf("Failed to connect to the database: %v", err)
	}
	defer db.Close()

	handler := handlers.NewQuestionnaireHandler(db)

	e := echo.New()
	req := httptest.NewRequest(http.MethodGet, "/questionnaire", nil)
	rec := httptest.NewRecorder()
	c := e.NewContext(req, rec)

	err = handler.GetQuestionnaire(c)
	assert.NoError(t, err)
	assert.Equal(t, http.StatusOK, rec.Code)
}

func TestGetUserQuestionnaires(t *testing.T) {
	ctx := context.Background()
	db, err := models.ConnectDB(ctx)
	if err != nil {
		t.Fatalf("Failed to connect to the database: %v", err)
	}
	defer db.Close()

	handler := handlers.NewQuestionnaireHandler(db)

	e := echo.New()
	req := httptest.NewRequest(http.MethodGet, "/questionnaire/user/1", strings.NewReader(""))
	rec := httptest.NewRecorder()
	c := e.NewContext(req, rec)
	c.SetPath("/questionnaire/user/:user_id")
	c.SetParamNames("user_id")
	c.SetParamValues("1")

	err = handler.GetUserQuestionnaires(c)
	assert.NoError(t, err)
	assert.Equal(t, http.StatusOK, rec.Code)
}
