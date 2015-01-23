package tasks

import (
	"fmt"
	"github.com/k4orta/bsi/db"
	"github.com/k4orta/bsi/transit"
	"time"
)

var (
	routes = []string{
		"71",
		"N",
		"71L",
		"16X"
	}
)

func StartScrape() {
	for {
		fmt.Println("Starting Scrape\n")
		scrape()
		time.Sleep(time.Minute)
	}
}

func scrape() {
	results := 0
	for _, route := range routes {
		vr, err := transit.GetVehiclesData(route)
		if err == nil {
			db.InsertVehicles(vr.Vehicles)
			results += len(vr.Vehicles)
		}
	}
	fmt.Printf("Got %v results at %v\n", results, time.Now())
}
