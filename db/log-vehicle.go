// cql command to create vehicles table
// create table bsi.vehicles_by_day(id text, route text, date text, time timestamp, lat float, lng float, heading int, leading_vehicle_id text, predictalbe boolean, speed_km_hr float, secs_since_report int, PRIMARY KEY ((route,date),time));

package db

import (
	"github.com/k4orta/bsi/transit"
	"log"
	"time"
)

func InsertVehicle(vehicle *transit.Vehicle) error {
	s, err := NewSession()
	if err != nil {
		log.Fatal(err)
		return err
	}

	defer s.Close()

	date := dateFromDateTime(time.Now())
	if err := s.Query(`INSERT INTO vehicles_by_day (route, id, date, time, heading, lat, lng, leading_vehicle_id, predictable, secs_since_report, speed_km_hr) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, vehicle.RouteTag, vehicle.Id, date, time.Now(), vehicle.Heading, vehicle.Lat, vehicle.Lng, vehicle.LeadingVehicleId, vehicle.Predictable, vehicle.SecsSinceReport, vehicle.SpeedKmHr).Exec(); err != nil {
		log.Fatal(err)
	}

	return nil
}

func dateFromDateTime(t time.Time) string {
	return t.Format("1-2-2006")
}
