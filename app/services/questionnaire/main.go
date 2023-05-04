package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/tu_usuario/questionnaire/src/handlers"
	"github.com/tu_usuario/questionnaire/src/models"
	"log"
	"context"
	"net/http"
)

func main() {
	ctx := context.Background()
	db, err := models.ConnectDB(ctx)
	if err != nil {
		log.Fatalf("Failed to connect to the database: %v", err)
	}
	defer db.Close()

	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	handler := handlers.NewQuestionnaireHandler(db)
	e.GET("/questionnaire", handler.GetQuestionnaire)

	if err := e.Start(":3003"); err != nil && err != http.ErrServerClosed {
        log.Fatalf("Failed to start the server: %v", err)
    }
}
