docker build --no-cache -f SQL\Dockerfile.PostgreSql -t sampleformetrics/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t sampleformetrics/app ../..
