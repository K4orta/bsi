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
	n.UseHandler(router)
	n.Use(negroni.NewStatic(http.Dir("webapp/public")))

	n.Run(":8048")
}
