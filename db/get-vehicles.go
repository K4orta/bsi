package db

import (
	"github.com/k4orta/bsi/transit"
	"time"
)

func GetVehicles(route string) ([]*transit.Vehicle, error) {
	s, err := NewSession()
	if err != nil {
		return nil, err
	}
	defer s.Close()
	now := time.Now()
	iter := s.Query(`SELECT route, id, date, time, heading, dir_tag, lat, lng, leading_vehicle_id, predictalbe, secs_since_report, speed_km_hr FROM vehicles_by_day WHERE route = ? AND date = ?`, route, dateFromDateTime(now)).Iter()

	tv := transit.Vehicle{}
	var date string
	vehicles := []*transit.Vehicle{}

	for iter.Scan(&tv.RouteTag, &tv.Id, &date, &tv.TimeLogged, &tv.Heading, &tv.DirTag, &tv.Lat, &tv.Lng, &tv.LeadingVehicleId, &tv.Predictable, &tv.SecsSinceReport, &tv.SpeedKmHr) {
		vehicles = append(vehicles, &transit.Vehicle{tv.Id, tv.RouteTag, tv.Lat, tv.Lng, tv.DirTag, tv.Heading, tv.LeadingVehicleId, tv.Predictable, tv.SpeedKmHr, tv.SecsSinceReport, tv.TimeLogged})
	}

	return vehicles, nil
}
