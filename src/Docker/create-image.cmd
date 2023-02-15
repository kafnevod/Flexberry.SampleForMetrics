alias docker=podman
REPOSITORY=dh.ics.perm.ru

docker build  -f SQL/Dockerfile.PostgreSql -t $REPOSITORY/sampleformetrics/postgre-sql ../SQL

docker build  -f Dockerfile -t $REPOSITORY/sampleformetrics/app ../..
