# BookGrid

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## NOTES

This makes use of an API already deployed within Azure and there is no database as it makes use of cached, mock books which refreshes every 24 hours. 
The update of records merely updates the memcache which can be rest by clicking the "Reset Cache" button in top left. I'm happy to walk anyone through
what I was thinking at time of demo'ing this.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
