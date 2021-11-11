FROM node:14-alpine


# FROM node:buster-slim

# # RUN \
# #   sudo apt-get update && \
# #   sudo apt-get dist-upgrade -y && \
# #   sudo apt-get autoclean -y && \
# #   sudo apt-get autoremove -y
COPY . .
# WORKDIR /ampsvelte
WORKDIR ./


# CMD ["/usr/local/bin/npm", "run build"]
RUN \
    npm install -g npm@8.1.3 && \
    npm install && \
    npm audit fix && \
    npm run-script build
    

CMD ["npm", "run", "build"]