# ==== START =====
FROM ubuntu:22.04
USER root

RUN apt update
RUN apt install --yes curl
RUN curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt install nodejs

WORKDIR /app

# ==== BUILD =====
ENV NODE_ENV development
COPY . .
RUN npm ci
RUN npm run build

# ==== RUN =======
EXPOSE 5000

CMD [ "npm", "run", "watch" ]