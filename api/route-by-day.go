package api

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/k4orta/bsi/db"
	"net/http"
)

func RouteByDay(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	vars := mux.Vars(req)
	vd, err := db.GetVehicles(vars["route"])
	if err == nil {
		out, _ := json.Marshal(vd)
		fmt.Fprint(w, string(out))
	} else {
		fmt.Fprint(w, `{"error": "There was an error"}`)
	}
}
