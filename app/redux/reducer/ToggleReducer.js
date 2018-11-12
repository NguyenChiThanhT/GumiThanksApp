import * as type from '../action/Type';
const defaultState = {
    //hide or show modal like
    modalVisible:false,
    //hide or show modal login
    modalVisiblePost:false,
    //hide or show dialogVisible export
    dialogVisible:false,
    //hide or show progressVisible import
    progressVisible:false
}
const ToggleReducer = (state = defaultState,action) =>{
    switch (action.type) {
        case type.MODALVISIBLE:
            return {
                ...state,
                modalVisible:!state.modalVisible
            }
        case type.MODALVISIBLE_POST:
            return {
                ...state,
                modalVisiblePost:!state.modalVisiblePost
            }
        case type.DIALOGVISIBLE:
            return {
                ...state,
                dialogVisible:!state.dialogVisible
            }
        case type.PROGRESSVISIBLE:
            return {
                ...state,
                progressVisible:!state.progressVisible
            }
        default:
            return state;
    }
}
export default ToggleReducer;