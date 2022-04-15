# NgxsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## What is state
- State is everything that stores your data.
- State management is how you store data
- Our state management is bad. Everything is everywhere, stored in local variables that are being passed around constantly. This leads to tons of chaos, unpredictable behavior, very hard debugging when problem arises.

## Facebooks flux
- They decided that they need an idea how to manage their state. The design pattern they came up with they called flux. The concrete implementation they called Redux.
- Flux 3 principles (MVC):
	1. Single source of truth (stores)
	2. Read only (immutability)
	3. Pure reducers for control (Doesnt mutate, predictable)
### Example:
- Management with services.
- Add observables for immutability and asynchronicity
- The pure functions

Everything ties up in the end but many many problems may arise. Thats why we have Redux, Vuex, NGrX

## How Redux works:
- View -> dispatch actions -> call reducers -> update state -> render view
- How it works more concretely.
- The problem with tons of boilerplate.

NGrx - Too boilerplate heavy X
NGxs vs Akita

To examplify:
- Akita state management
