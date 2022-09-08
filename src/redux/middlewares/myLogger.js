import rootReducer from "../../rootReducer";


// create middleware 
const myLogger = (store) => (next) => (action) => {

    console.log(`Action : ${JSON.stringify(action)}`);
    console.log(`Besore : ${JSON.stringify(store.getState())}`)


    const upcomingState = [action].reduce(rootReducer, store.getState())

    console.log(JSON.stringify(upcomingState))


    // pass next 
    return next(action)

}

export default myLogger;