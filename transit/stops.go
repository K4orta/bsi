package transit

import (
	"encoding/xml"
	"io/ioutil"
	"net/http"
)

type StopResponse struct {
	XMLName xml.Name `xml:"body"`
	Routes  []*Route `xml:"route"`
}
type Route struct {
	Title string  `xml:"title,attr" json:"title"`
	Stops []*Stop `xml:"stop" json:"stops"`
}

type Stop struct {
	Title  string  `xml:"title,attr" json:"title"`
	Tag    string  `xml:"tag,attr" json:"tag"`
	StopId string  `xml:"stopId,attr" json:"stopId"`
	Lat    float32 `xml:"lat,attr" json:"lat"`
	Lng    float32 `xml:"log,attr" json:"lng"`
}

var (
	stopApiUrl = "http://webservices.nextbus.com/service/publicXMLFeed?command=routeConfig&a=sf-muni&r=N"
)

func GetStopData() (*StopResponse, error) {
	resp, err := http.Get(stopApiUrl)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	b, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}
	var vr StopResponse
	xml.Unmarshal([]byte(b), &vr)
	return &vr, nil
}
