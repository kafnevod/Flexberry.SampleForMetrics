#!/bin/sh
PODMANNAME=pod-sampleformetrics
podman pod rm -f pod_sampleformetrics
podman pod rm -f $PODMANNAME
podman rm -f sampleformetrics_app-postgres-db_1 sampleformetrics_app_1

REGISTRY=dh.ics.perm.ru
podman run -d --rm \
        --name=sampleformetrics_app_1 \
        -p 80:80 \
        --network host \
        --add-host=app-postgres-db:127.0.0.1 \
        ${REGISTRY}/sampleformetrics/app

podman run -d --rm \
        --name sampleformetrics_app-postgres-db_1 \
        --network host \
        -p 5432:5432 \
        -v DB:/var/lib/pgsql/data/ \
        ${REGISTRY}/sampleformetrics/postgre-sql

