#!/bin/sh
PODMANNAME=pod-sampleformetrics
podman pod rm -f pod_sampleformetrics
podman pod rm -f $PODMANNAME
podman rm -f sampleformetrics_app-postgres-db_1 sampleformetrics_app_1

REGISTRY=dh.ics.perm.ru
podman run -d  \
        --name=sampleformetrics_app_1 \
        -p 1080:80 \
        --add-host=app-postgres-db:192.168.100.9 \
        ${REGISTRY}/sampleformetrics/app

podman run -d  \
        --name sampleformetrics_app-postgres-db_1 \
        -p 5432:5432 \
        -v DB:/var/lib/pgsql/data/ \
        ${REGISTRY}/sampleformetrics/postgre-sql

