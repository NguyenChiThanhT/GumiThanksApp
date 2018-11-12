import * as type from "./Type";
//action request
export function FetchingPeopleRequest(){
    return {type: type.START_FETCH_REQUEST}
}
//action success
export function FetchingPeopleSuccess(person){
    return {
        type: type.FETCH_SUCCESS,
        person: person
    }
}
//action err
export function FetchingPeopleFailure(error){
    return {
        type:type.FETCH_ERROR,
        errorMessage:error
    }
}
//action hide or show modal like
export function ModalVisibleg() {
    return {type:type.MODALVISIBLE};
}
//action hide or show modal login
export function ModalVisiblegPost() {
    return {type:type.MODALVISIBLE_POST};
}
//action hide or dialog export
 export function DialogVisible() {
     return {type:type.DIALOGVISIBLE}
 }
 //action hide progressvisible
export function ProgressVisible() {
    return {type:type.PROGRESSVISIBLE}
}
//action set SetOptionList
export function SetOptionList(id,name,count,countbegin,email,image,optionList) {
    return {
        type:type.UPDATE_PERSON,
        id:id,
        name:name,
        count:count,
        countbegin:countbegin,
        email:email,
        image:image,
        optionList:optionList,

    }
}