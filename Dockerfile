FROM node:18-alpine

WORKDIR /home/app

COPY . ./

RUN chmod -R 777 /app


EXPOSE 3333

CMD ["npm", "run", "dev", "start"]

USER root

ENTRYPOINT ["/bin/sh", "-c", "npm start"]

