package main

import (
	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	"github.com/k4orta/bsi/api"
	"net/http"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/stops", api.Stops)

	n := negroni.New()
	n.Use(negroni.NewStatic(http.Dir("webapp/public")))
	n.UseHandler(router)

	n.Run(":8048")
}
