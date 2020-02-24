FROM node:lts

RUN apt-get update && \
    apt-get install netcat -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /opt

COPY ./opt/package*.json /opt/
COPY ./docker-entrypoint-app.sh /docker-entrypoint.sh
 
RUN chmod +x /docker-entrypoint.sh && \
    npm install --quiet

VOLUME /opt

EXPOSE 3000

ENTRYPOINT ["/docker-entrypoint.sh"]