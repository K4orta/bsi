package db

import (
	"github.com/gocql/gocql"
)

func NewSession() (*gocql.Session, error) {
	c := gocql.NewCluster("192.168.0.1")
	c.Keyspace = "bsi"
	c.Consistency = gocql.Quorum
	session, err := c.CreateSession()
	if err != nil {
		return nil, err
	}
	return session, nil
}
