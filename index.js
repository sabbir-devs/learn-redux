const {createStore} = require('redux');


// defining constent
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";


// state
const intialCountState = {
    count: 0
}
const intialUserState = {
    users: [
        { name: 'sabbir', }
    ]
}



// actin - Object - 2 importent things - type and payload 
// payload for data transfer 
// INCREMENT COUNTER
// DECREMENT COUNTER

const incrementCounterAction = () => {
    return{
        type: INCREMENT,
    };
}
const decrementCounterAction = () => {
    return{
        type: DECREMENT,
    };
}
const addUserAction = () => {
    return{
        type: ADD_USER,
        payload: {name: 'moon'}
    };
}

// create reducer for counter
const counterReducer = (state = intialCountState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
            
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
    
        default:
            state;
    }
}





// 1. state
// 2. dispatch action
// 3. reducer work based on action type
// 4. store, store have 3 important methods 1- getState() 2- dispatch() 3- subscribe()

// create store
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState())
})

// dispatch action
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(decrementCounterAction());




