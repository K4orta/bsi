package api

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/k4orta/bsi/db"
	"github.com/k4orta/bsi/transit"
	"net/http"
)

func Vehicles(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	vars := mux.Vars(req)
	vd, _ := transit.GetVehiclesData(vars["route"])

	db.InsertVehicles(vd.Vehicles)

	out, _ := json.Marshal(vd)
	fmt.Fprint(w, string(out))
}
