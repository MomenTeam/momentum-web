FROM node:14.11.0
COPY . .
RUN npm install

ENTRYPOINT tail -f /dev/null
