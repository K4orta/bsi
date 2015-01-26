package db

import (
	"github.com/k4orta/bsi/transit"
)

func GetVehicles(route string) ([]*transit.Vehicle, error) {
	s, err := NewSession()
	if err != nil {
		return nil, err
	}
	defer s.Close()
	iter := s.Query(`SELECT route, id, date, time, heading, lat, lng, leading_vehicle_id, predictalbe, secs_since_report, speed_km_hr FROM vehicles_by_day WHERE route = ? AND date = ?`, route, "1-24-2015").Iter()

	tv := transit.Vehicle{}
	var date string
	vehicles := []*transit.Vehicle{}

	for iter.Scan(&tv.RouteTag, &tv.Id, &date, &tv.TimeLogged, &tv.Heading, &tv.Lat, &tv.Lng, &tv.LeadingVehicleId, &tv.Predictable, &tv.SecsSinceReport, &tv.SpeedKmHr) {
		vehicles = append(vehicles, &transit.Vehicle{tv.Id, tv.RouteTag, tv.Lat, tv.Lng, tv.Heading, tv.LeadingVehicleId, tv.Predictable, tv.SpeedKmHr, tv.SecsSinceReport, tv.TimeLogged})
	}

	return vehicles, nil
}
