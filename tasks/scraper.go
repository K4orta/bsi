package tasks

import (
	"github.com/k4orta/bsi/db"
	"github.com/k4orta/bsi/transit"
)

var (
	routes = []string{
		"71",
		"N",
	}
)

func Scrape() {
	for _, route := range routes {
		vr, err := transit.GetVehiclesData(route)
		if err == nil {
			db.InsertVehicles(vr.Vehicles)
		}
	}
}
