# FROM node:14-alpine

FROM node:14-buster

RUN mkdir ./ampsvelte

WORKDIR /ampsvelte

COPY . .

RUN ls

RUN npm install

RUN  npm run build

EXPOSE 4588

CMD ["node", "./build"]

# RUN \
#     npm install && \
#     npm audit fix && \
#     npm run-script build
    

# CMD ["npm", "run", "dev"]




# # RUN \
# #   sudo apt-get update && \
# #   sudo apt-get dist-upgrade -y && \
# #   sudo apt-get autoclean -y && \
# #   sudo apt-get autoremove -y

# CMD ["/usr/local/bin/npm", "run build"]