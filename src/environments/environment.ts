// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase:{
    apiKey: "AIzaSyDbIEOXiCoom9QNzEGeW75D3IB9zCC17Fs",
    authDomain: "fs1prod-be71b.firebaseapp.com",
    databaseURL: "https://fs1prod-be71b.firebaseio.com",
    projectId: "fs1prod-be71b",
    storageBucket: "fs1prod-be71b.appspot.com",
    messagingSenderId: "1075488760404"
  }
};
