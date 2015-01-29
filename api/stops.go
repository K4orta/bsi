package api

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/k4orta/bsi/transit"
	"net/http"
)

func Stops(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	vars := mux.Vars(req)
	sd, _ := transit.GetStopData(vars["route"])
	out, _ := json.Marshal(sd.Routes[0])

	fmt.Fprint(w, string(out))
}
