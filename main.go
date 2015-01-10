package main

import (
	"fmt"
	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	"net/http"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/hello", func(w http.ResponseWriter, req *http.Request) {
		fmt.Fprint(w, "Hello World")
	})

	n := negroni.New()
	n.Use(negroni.NewStatic(http.Dir("webapp/public")))
	n.UseHandler(router)

	n.Run(":8048")
}
