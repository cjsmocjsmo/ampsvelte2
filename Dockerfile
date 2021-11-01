FROM node:14.5.0-buster-slim

RUN \
  sudo apt-get update && \
  sudo apt-get dist-upgrade -y && \
  sudo apt-get autoclean -y && \
  sudo apt-get autoremove -y


COPY . .
WORKDIR /ampsvelte

CMD ["/usr/local/bin/npm", "run build"]
# RUN \
#     npm run-script build && \
#     npm install


# CMD ["/usr/local/bin/npm", "start"]