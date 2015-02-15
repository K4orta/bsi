package api

import (
	"fmt"
	"net/http"
)

func Routes(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprint(w, `[
		"N",
		"71",
		"16X"
	]`)
}
