package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/tu_usuario/questionnaire/src/handlers"
	"github.com/tu_usuario/questionnaire/src/models"
)

func main() {
	db, err := models.ConnectDB()
	if err != nil {
		panic(err)
	}
	defer db.Close()

	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.GET("/questionnaire", handlers.GetQuestionnaire(db))

	e.Start(":3003")
}
