import Login from '../../api/Login';
import Api from '../../api/Api';
import {FetchingPeopleSuccess,FetchingPeopleFailure,ModalVisiblegPost,SetOptionList} from './Action';
import {AsyncStorage} from 'react-native';
//set pass of user
export function SetPassword(){
       return dispatch =>{
           Login()
               .then((results) =>{
                   password = results[0].password;
                   AsyncStorage.multiSet([
                       ["pass",password]
                   ])
               })
               .catch(error => dispatch(FetchingPeopleFailure(error)))
       }
}
// update countbegin
export function UpdateCountBegin(id,name,count,countbegin,email,image){
    return dispatch =>{
        dispatch(ModalVisiblegPost())
        var params = {id,name,count,countbegin,email,image};
        return Api.put('/person/'+id,params)
            .then(res =>console.log(res))
            .catch(error =>console.log(error))
    }
}
//update OptionList
export function UpdateOptionList(id,name,count,countbegin,email,image,arrperson) {
    return dispatch =>{
        for (var i =0; i < arrperson.length; i++){
            if (arrperson[i].id === id) {
                arrperson.splice(i,1);
            }
        }
        dispatch(SetOptionList(id,name,count,countbegin,email,image,arrperson))
    }
}
//update ListPerson;
export function UpdateListPerson(id,name,count,countbegin,email,image) {
       return dispatch =>{
               dispatch(ModalVisiblegPost())
               var params = {id,name,count,countbegin,email,image};
               return Api.put('/person/'+id,params)
                   .then(res =>console.log(res))
                   .catch(error =>console.log(error))
       }
}

//get list perosn
export function GetDataPerson(){
    return dispatch => {
        return Api.get('/person')
            .then(results => dispatch(FetchingPeopleSuccess(results)))
            .catch(error => dispatch(FetchingPeopleFailure(error)))
    }
}
