# Steam Avatar

> A micro-service to return an avatar from steam without exposing an api key.

## How to use

* Rename `.env-example` to `.env` and adjust your secrets

```.env
STEAM_API_KEY=YOURSTEAMWEBAPIKEY
STAGING_HOST=steam-avatars.localhost
PRODUCTION_HOST=steam-avatars.com
```

## Scripts

* `dev` - Watches and compiles the typescript and starts up the micro-dev server
* `start` - Runs the application (It must be built first or this will fail)
* `build` - Builds the application using the Typescript compiler
* `test` - Test with Jest(ts-jest)

## Docker

* Uses Traefik labels
* Runs on port 3000

#### Uses

* micro by zeit
