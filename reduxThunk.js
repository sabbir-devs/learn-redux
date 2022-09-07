// async action - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware- redux-thunk
// axios api

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");


// constant
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FALED = "GET_TODOS_FALED";
const API_URL = "https://jsonplaceholder.typicode.com/todo";

// state
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
}

// actions
const getTodosRequest = () => {
    return{
        type: GET_TODOS_REQUEST,
    }
}
const getTodosSuccess = (todos) => {
    return{
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}
const getTodosFaled = (error) => {
    return{
        type: GET_TODOS_FALED,
        payload: error
    }
}

// reducers
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:{
            return{
                ...state,
                isLoading: true,
            }
        };
        case GET_TODOS_SUCCESS:{
            return{
                ...state,
                isLoading: false,
                todos: action.payload
            }
        };
        case GET_TODOS_FALED:{
            return{
                ...state,
                isLoading: false,
                todos: action.payload
            }
        };
          
    
        default:
            return state;
    }
}

// async action creator
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(API_URL)
        .then(res => {
            const todos = res.data;
            const title = todos.map(todo => todo.title);
            dispatch(getTodosSuccess(title))
        })
        .catch(error => {
            const errorMessage = error.message;
            dispatch(getTodosFaled(errorMessage))
        })
    }
}

// store
const store = createStore(todosReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchData())