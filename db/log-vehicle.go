// cql command to create vehicles table
// create table bsi.vehicles_by_day(id text, route text, date text, time timestamp, lat float, lng float, heading int, leading_vehicle_id text, predictalbe boolean, speed_km_hr float, secs_since_report int, PRIMARY KEY ((route,date),time));

package db

import (
	"github.com/k4orta/transit"
)

func InsertVehicle(vehicle *transit.Vehicle) error {

}
