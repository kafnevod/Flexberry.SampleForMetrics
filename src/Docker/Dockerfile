FROM node:12 as ember_app

COPY /src/ember-app /src/ember-app

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn global add ember-cli@3.1.4; \
  yarn global add bower;

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn install ; \
  bower install  --allow-root;

RUN \
  set -x; \
  cd /src/ember-app/; \
  ember build --environment=docker

FROM mono:latest as backend

COPY /src/SampleForMetrics /src/SampleForMetrics

RUN \
 cd /src/SampleForMetrics ;\
 nuget restore SampleForMetrics.sln; \
 msbuild /p:Configuration=Release SampleForMetrics.sln

FROM flexberry/mono-xsp:latest

MAINTAINER mail@flexberry.net

COPY --from=backend /src/SampleForMetrics/ODataBackend /app
COPY --from=ember_app /src/ember-app/dist /app
WORKDIR /app
