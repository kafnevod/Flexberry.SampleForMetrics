#!/bin/sh
PODMANNAME=pod-sampleformetrics
podman pod rm -f pod_sampleformetrics
podman pod rm -f $PODMANNAME
podman rm -f sampleformetrics_app-postgres-db_1 sampleformetrics_app_1

REGISTRY=dh.ics.perm.ru
podman pod create --name $PODMANNAME \
	-p 80:80 \
	--add-host app-postgres-db:127.0.0.1

podman run -d --rm \
	--pod $PODMANNAME \
	--name app \
        ${REGISTRY}/sampleformetrics/app

podman run -d --rm \
        --pod $PODMANNAME \
	--name postgre-sql \
        -v DB:/var/lib/pgsql/data/ \
        ${REGISTRY}/sampleformetrics/postgre-sql

