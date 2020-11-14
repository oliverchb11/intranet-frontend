// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_PERSONAS : 'http://localhost:4000/api/v1/intranet-unisabaneta/equipo',
  API_ADMINISTRACION : 'http://localhost:4000/api/v1/intranet-unisabaneta/equipo/administracion',
  API_FACULTAD_INGENIERIA : 'http://localhost:4000/api/v1/intranet-unisabaneta/equipo/facultad-ingenieria',
  API_FACULTAD_DERECHO : 'http://localhost:4000/api/v1/intranet-unisabaneta/equipo/facultad-derecho',
  API_FACULTAD_CIENCIAS_EMPRESARIALES : 'http://localhost:4000/api/v1/intranet-unisabaneta/equipo/facultad-ciencias-empresariales',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
