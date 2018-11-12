import {ModalVisibleg,ModalVisiblegPost,DialogVisible,ProgressVisible} from './Action';

//dispatch modal like
export function ToggleModalVisible() {
    return dispatch =>{
        dispatch(ModalVisibleg())
    }
}
//dispatch modal login
export function ToggleModalVisiblePost() {
    return dispatch =>{
        dispatch(ModalVisiblegPost())
    }
}
//dispatch dialog in list count
export function ToggleDialogVisible() {
    return dispatch =>{
        dispatch(DialogVisible())
    }
}
//dispatch ProgRessVisiable in list count
export function ToggleProgRessVisiable() {
    return dispatch =>{
        dispatch(ProgressVisible())
    }
}

