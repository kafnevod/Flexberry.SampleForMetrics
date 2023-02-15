#!/bin/sh
PODMANNAME=pod-sampleformetrics
podman pod rm -f pod_sampleformetrics
podman pod rm -f $PODMANNAME
podman rm -f sampleformetrics_app-postgres-db_1 sampleformetrics_app_1

manifest=$1
podman kube play $manifest
