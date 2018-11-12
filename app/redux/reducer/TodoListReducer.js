import * as type from '../action/Type';

const defaultState = {
    errorMessage:'',
    person:[],

}

const TodoListReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case type.START_FETCH_REQUEST:
            return {...state}
        case type.FETCH_SUCCESS:
            return {
                ...state,
                person:action.person
            }
        default:
            return state;
    }
}
export default TodoListReducer;