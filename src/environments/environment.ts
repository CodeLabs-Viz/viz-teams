// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBBFLTGAmv6yvIFns7H2XAKV5flYLEm-7U',
    authDomain: 'viz-teams.firebaseapp.com',
    databaseURL: 'https://viz-teams.firebaseio.com',
    projectId: 'viz-teams',
    storageBucket: 'viz-teams.appspot.com',
    messagingSenderId: '634927688343'
  }
};
