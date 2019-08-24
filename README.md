# Steam Avatar
> A way to return an avatar from steam without exposing an api key.

## How to use
* Create a `.env` file and inside it place 
```.env
STEAM_API_KEY=YOURSTEAMWEBAPIKEY
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