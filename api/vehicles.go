package api

import (
	"encoding/json"
	"fmt"
	"github.com/k4orta/bsi/transit"
	"net/http"
)

func Vehicles(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	vd, _ := transit.GetVehiclesData()
	out, _ := json.Marshal(vd)
	fmt.Fprint(w, string(out))
}
