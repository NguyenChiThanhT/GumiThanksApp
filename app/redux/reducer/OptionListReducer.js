import * as type from '../action/Type';

const defaultState = {
    optionList: [],
    //update 1 phan tu trong mang khi dc chon
    id: null,
    name: null,
    count: null,
    countbegin: null,
    email: null,
    image: null
}
const OptionListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case type.UPDATE_PERSON:
            return {
                ...state,
                optionList: action.optionList,
                id: action.id,
                name: action.name,
                count: action.count,
                countbegin: action.countbegin,
                email: action.email,
                image: action.image
            }
        default:
            return state;
    }
}
export default OptionListReducer;