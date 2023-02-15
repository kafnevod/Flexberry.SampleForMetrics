#!/bin/sh
PODMANNAME=sampleformetrics
podman pod rm -f pod-$PODMANNAME
podman pod rm -f pod_$PODMANNAME
podman rm -f sampleformetrics_app-postgres-db_1 sampleformetrics_app_1

podman pod ls
podman ps
podman-compose -p $PODMANNAME  \
  --pod-args="-h $PODMANNAME -p 80:80 --add-host app-postgres-db:127.0.0.1" \
	up -d


