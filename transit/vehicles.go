package transit

import (
	"encoding/xml"
	"io/ioutil"
	"net/http"
	"strconv"
)

type VehicalResponse struct {
	XMLName  xml.Name   `xml:"body"`
	Vehicles []*Vehicle `xml:"vehicle" json:"vehicles"`
	LastTime LastT      `xml:"lastTime" json:"lastTime"`
}

type LastT struct {
	Time int64 `xml:"time,attr" json:"time"`
}

type Vehicle struct {
	Id               string  `xml:"id,attr" json:"id"`
	RouteTag         string  `xml:"routeTag,attr" json:"routeTag"`
	Lat              float32 `xml:"lat,attr" json:"lat"`
	Lng              float32 `xml:"lon,attr" json:"lng"`
	Heading          int     `xml:"heading,attr" json:"heading"`
	LeadingVehicleId string  `xml:"leadingVehicleId,attr" json:"leadingVehicleId"`
	Predictable      bool    `xml:"predictable,attr" json:"predictalbe"`
	SpeedKmHr        float32 `xml:"speedKmHr,attr" json:"speedKmHr"`
	SecsSinceReport  int     `xml:"secsSinceReport,attr" json:"secsSinceReport"`
}

var (
	apiUrl = "http://webservices.nextbus.com/service/publicXMLFeed?command=vehicleLocations&a=sf-muni"
)

var lastTime int64 = 0

func GetVehiclesData(route string) (*VehicalResponse, error) {
	resp, err := http.Get(apiUrl + "&r=" + route + "&t=" + strconv.FormatInt(lastTime, 10))
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
	lastTime = vr.LastTime.Time
	return &vr, nil
}
