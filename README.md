# Sheet Region Selection Protoptype

Angular web app prototype which lets user select/mark multiple cells of a sheets(data tables) fetched via a GraphQL source.


## Prequistisive

Just make sure `API_URL` present in this project points to right GraphQL server & can alter same from below file.
```
// config.js file
....
export const API_URL = 'http://localhost:4000';
....
```

## Available Scripts

### GraphQL Server
Run below command to run GraphQL server
#### `node server.mjs`

### Client App
Run below command to run Angular client app
#### `ng serve`

### Run everything (client+server) 🙂
Run below command to run project (it will start both GraphQL server and Angular client app)
#### `yarn start`

## Running unit tests
#### `ng test`

## Demo GIF 😙
![layer-demo](https://user-images.githubusercontent.com/12964174/124905967-38101080-e004-11eb-8c20-9b790bdee5aa.gif)


