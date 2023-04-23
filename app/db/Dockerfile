# Dockerfile
FROM postgres:13

COPY migrations /docker-entrypoint-initdb.d/migrations
COPY init-db.sh /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/init-db.sh