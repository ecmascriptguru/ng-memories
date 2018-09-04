// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr: false,
    firebase: {
        apiKey: "AIzaSyAIH-UHj0eBEMx95y46vwn9Znn0YCdKUJ8",
        authDomain: "my-memories-edf16.firebaseapp.com",
        databaseURL: "https://my-memories-edf16.firebaseio.com",
        projectId: "my-memories-edf16",
        storageBucket: "my-memories-edf16.appspot.com",
        messagingSenderId: "795255837824"
    }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
