# State management demo
State management research. Demo on simple state management with only services, NgXs and Akita.

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

* NGrx - Too boilerplate heavy X
## Service only vs NgXs vs Akita demo
* The state
* Functions that change the store
* Immutability
* Dev tools

## Additional topics
* Immutability
* immer
* ivy



