#!/bin/sh
REPOSITORY=dh.ics.perm.ru
podman build  -f SQL/Dockerfile.PostgreSql -t $REPOSITORY/sampleformetrics/postgre-sql ../SQL
podman build  -f Dockerfile -t $REPOSITORY/sampleformetrics/app ../..
