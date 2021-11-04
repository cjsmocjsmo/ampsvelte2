FROM node:buster-slim

# RUN \
#   sudo apt-get update && \
#   sudo apt-get dist-upgrade -y && \
#   sudo apt-get autoclean -y && \
#   sudo apt-get autoremove -y


COPY . .
WORKDIR /ampsvelte

# CMD ["/usr/local/bin/npm", "run build"]
RUN \
    npm install -g npm@8.1.2 && \
    npm run-script build && \
    npm install


CMD ["npm run build"]