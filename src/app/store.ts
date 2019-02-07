import { state } from '@angular/animations';
import { Itodo } from './todo';
import { REMOVE_ALL_TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './action';
export interface todoAppStore {
    todos: Itodo[];
    lastUpdate: Date;
}
export const INITIAL_STATE: todoAppStore = {
    todos: [],
    lastUpdate: null
}
export function rootReducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            action.todo.id = state.todos.length + 1;    
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            })
        
        case TOGGLE_TODO:
            var todo = state.todos.find(t => t.id === action.todo.id);
            console.log('dddddddddd',state);
            console.log(todo)
           
            var index = state.todos.indexOf(todo);
            console.log(index);
            state.todos[index].description=action.todo.description;
            console.log('ffff',state.todos)
            return Object.assign({}, state, {
                todos: state.todos,
                lastUpdate: new Date()
            })

        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            })

        case REMOVE_ALL_TODOS:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            })
    }
    return state;
}