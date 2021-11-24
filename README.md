# AmpSvelte2

AmpSvelte2 is the frontend for the AmpGo server.

## How To Use

You will need to have the [AmpGo](https://github.com/cjsmocjsmo/ampgoserver) server installed and setup before installing AmpSvelte2

There are two way to use this project.  You can use docker or npm.
If using the docker method you will need to have docker and docker-compose installed.
This is the prefered method as ampgoserver requires docker and docker-compose.

```bash
# clone the repo
git clone https://github.com/cjsmocjsmo/ampsvelte2

cd ampsvelte2

docker-compose up -d --build

```
Or you can use npm

```bash
git clone https://github.com/cjsmocjsmo/ampsvelte2

cd ampsvelte2

npm install

npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
Now you can point your browser at:

```http://MYHOSTADDRESS:4588```


