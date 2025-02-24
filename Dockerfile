FROM node:18-alpine

WORKDIR /home/app

COPY . ./

RUN chmod +x ./start.sh


EXPOSE 3333

CMD ["npm", "run", "dev", "start"]

USER root

ENTRYPOINT ["/bin/sh", "./start.sh"]

