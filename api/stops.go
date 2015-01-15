package api

import (
	"encoding/json"
	"fmt"
	"github.com/k4orta/bsi/transit"
	"net/http"
)

func Stops(w http.ResponseWriter, req *http.Request) {
	sd, _ := transit.GetStopData()
	out, _ := json.Marshal(sd.Routes[0])
	fmt.Fprint(w, string(out))
}
