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
	Title string  `xml:"title,attr"`
	Stops []*Stop `xml:"stop"`
}

type Stop struct {
	Title  string  `xml:"title,attr"`
	Tag    string  `xml:"tag,attr"`
	StopId string  `xml:"stopId,attr"`
	Lat    float32 `xml:"lat,attr"`
	Lng    float32 `xml:"log,attr"`
}

var (
	stopApiUrl = "http://webservices.nextbus.com/service/publicXMLFeed?command=routeConfig&a=sf-muni&r=N"
)

func getStopData() (*StopResponse, error) {
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
