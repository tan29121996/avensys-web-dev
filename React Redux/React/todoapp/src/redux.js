const {createStore, combineReducers} = require("redux")

const initialData = {
    tasks: ["Coding", "Debugging"]
}

export function add(info) {
    return {
        type: "ADD_TASK",
        payload: info
    }
}


const todoReducer = (state = initialData, action) => {
    if (action.type === "ADD_TASK") {
        return {
            tasks: [...state.tasks, action.payload]
        }
    } else {
        return state
    }
}

const rootReducer = combineReducers({
    todoReducer: todoReducer
})

export const todoStore = createStore(rootReducer)