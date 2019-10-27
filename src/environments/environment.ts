// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //apiUrl: 'http://localhost:4000'
  apiUrl: 'https://angular-1v4csq.stackblitz.io',
  firebase: {
    apiKey: "AIzaSyBE3Axen6BgX2IAOt7-LLfsGKLhrIS1Dck",
    authDomain: "mypersonalfinancehub.firebaseapp.com",
    databaseURL: "https://mypersonalfinancehub.firebaseio.com",
    projectId: "mypersonalfinancehub",
    storageBucket: "mypersonalfinancehub.appspot.com",
    messagingSenderId: "930494703978",
    appId: "1:930494703978:web:cecb6a3b863b5af2c49d13",
    measurementId: "G-BXL0Y9HT7F"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.