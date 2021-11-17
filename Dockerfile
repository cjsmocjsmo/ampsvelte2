# FROM node:14-alpine

FROM node:14-buster

RUN mkdir ./ampsvelte

WORKDIR /ampsvelte

COPY . .

RUN npm ci

# RUN  npm run build

EXPOSE 4588

CMD ["npm", "run", "dev", "--", "--host"]

# CMD ["node", "./build"]

# RUN \
#     npm install && \
#     npm audit fix && \
#     npm run-script build
    






# # RUN \
# #   sudo apt-get update && \
# #   sudo apt-get dist-upgrade -y && \
# #   sudo apt-get autoclean -y && \
# #   sudo apt-get autoremove -y

# CMD ["/usr/local/bin/npm", "run build"]