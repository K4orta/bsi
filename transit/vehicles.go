package transit

import (
	"encoding/xml"
	"io/ioutil"
	"net/http"
)

type VehicalResponse struct {
	XMLName  xml.Name   `xml:"body"`
	Vehicles []*Vehicle `xml:"vehicle"`
	LastTime LastT      `xml:"lastTime"`
}

type LastT struct {
	Time int64 `xml:"time,attr"`
}

type Vehicle struct {
	Id               string  `xml:"id,attr"`
	RouteTag         string  `xml:"routeTag,attr"`
	Lat              float32 `xml:"lat,attr"`
	Lng              float32 `xml:"lon,attr"`
	Heading          float32 `xml:"heading,attr"`
	LeadingVehicleId string  `xml:"leadingVehicleId,attr"`
	Predictable      bool    `xml:"predictable,attr"`
	SpeedKmHr        float32 `xml:"speedKmHr,attr"`
	SecsSinceReport  int     `xml:"secsSinceReport,attr"`
}

var (
	apiUrl = "http://webservices.nextbus.com/service/publicXMLFeed?command=vehicleLocations&a=sf-muni&r=N&t=1420912755000"
)

func getVehiclesData() (*VehicalResponse, error) {
	resp, err := http.Get(apiUrl)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	b, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}
	var vr VehicalResponse
	xml.Unmarshal([]byte(b), &vr)
	return &vr, nil
}
