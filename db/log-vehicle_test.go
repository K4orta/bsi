package db

import (
	"testing"
	"time"
)

func TestDateFormat(t *testing.T) {
	d := dateFromDateTime(time.Date(2015, 1, 18, 0, 0, 0, 0, time.Local))

	if d != "1-18-2015" {
		t.Error("Invalid return", d)
	}
}
