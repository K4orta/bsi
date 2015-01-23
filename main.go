package main

import (
	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	"github.com/k4orta/bsi/api"
	"github.com/k4orta/bsi/tasks"
	"net/http"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/stops", api.Stops)
	router.HandleFunc("/vehicles", api.Vehicles)

	n := negroni.New()
	n.Use(negroni.NewStatic(http.Dir("webapp/public")))
	n.UseHandler(router)

	tasks.StartScrape()

	n.Run(":8048")
}
