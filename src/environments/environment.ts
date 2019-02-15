// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mobileValidator: "[a-z0-9._%+-]+@[a-z0-9-]+[.]+[a-z.]{2,5}$",
  firebaseConfig: {
    apiKey: "AIzaSyDmdIBz-EEMHXNa_XWsYtiHcK3Mskx3mz0",
    authDomain: "universtiyapp.firebaseapp.com",
    databaseURL: "https://universtiyapp.firebaseio.com",
    projectId: "universtiyapp",
    storageBucket: "universtiyapp.appspot.com",
    messagingSenderId: "517649832320"
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
