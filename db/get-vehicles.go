package db

import (
	"fmt"
	"github.com/k4orta/bsi/transit"
	"time"
)

func GetVehicles(route string) ([]*transit.Vehicle, error) {
	s, err := NewSession()
	if err != nil {
		return nil, err
	}
	defer s.Close()
	iter := s.Query(`SELECT route, id, date, time, heading, lat, lng, leading_vehicle_id, predictalbe, secs_since_report, speed_km_hr FROM vehicles_by_day`).Iter()

	tv := transit.Vehicle{}
	var date string
	var t time.Time

	fmt.Println("Results:")
	for iter.Scan(&tv.RouteTag, &tv.Id, &date, &t, &tv.Heading, &tv.Lat, &tv.Lng, &tv.LeadingVehicleId, &tv.Predictable, &tv.SecsSinceReport, &tv.SpeedKmHr) {

		fmt.Println(tv, date, t)
	}

	return nil, nil
}
