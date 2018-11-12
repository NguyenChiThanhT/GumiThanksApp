import Api from '../../api/Api';
import {FetchingPeopleSuccess,DialogVisible,ProgressVisible} from './Action';
import {firebaseApp} from "../../api/Firebaseconfig";
import RNFetchBlob from "rn-fetch-blob";
import DocumentPicker from "react-native-document-picker";
const storage = firebaseApp.storage();
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

// export file csv
export function WriteFileCSV(arrperson) {
    arr = arrperson;
    return dispatch =>{
        dispatch(ProgressVisible())
        //add item row
        var csvRow = [];
        var A = [['id', 'name', 'count', 'countbegin', 'email', 'image']];
        for (var item = 0; item < arr.length; item++) {
            A.push([item, arr[item].name, arr[item].count, arr[item].countbegin, arr[item].email, arr[item].image])
        }
        for (var i = 0; i < A.length; i++) {
            csvRow.push(A[i].join(","))
        }
        var csvString = csvRow.join("\n");
        const dirs = RNFetchBlob.fs.dirs;
        // write the current list of answers to a local csv file
        const pathToWrite = `${dirs.DocumentDir}/data.csv`;
        fs.writeFile(pathToWrite, csvString, 'utf8')
            .then(() => {
                // wrote file /storage/emulated/0/Download/data.csv
                const sessinID = new Date().getTime();
                const nameref = storage.ref('file').child(`${sessinID}.csv`);
                fs.readFile(pathToWrite, 'utf8')
                    .then((data) => {
                        return Blob.build(data, {type: 'text'})
                    })
                    .then((blob) => {
                        setTimeout(() => {
                            dispatch(ProgressVisible());
                            dispatch(DialogVisible());
                        }, 1000);
                        return nameref.put(blob, {contentType: `text/csv`})
                    })
            })
            .catch(error => console.error(error));
    }
}
export function RedFileCSV() {
    return dispatch =>{
        result = [];
        //show all file in ios
        DocumentPicker.pick({type: [DocumentPicker.types.allFiles]})
            .then((res) => {
                dispatch(ProgressVisible())
                //get uri file
                const path = res.uri;
                const pathToWrite = path.slice(7);
               fs.readFile(pathToWrite, 'utf8')
                    .then((data) => {
                        //split data
                        lines = data.split('\n');
                        var result = [];
                        //split row in file csv
                        var headers = lines[0].split(",");
                        for (var i = 1; i < lines.length; i++) {
                            var data = lines[i].split(",");
                            if (data.length == headers.length) {
                                var location = {
                                    "id": data[0],
                                    "name": data[1],
                                    "count": data[2],
                                    "countbegin": data[3],
                                    "email": data[4],
                                    "image": data[5]
                                };
                                result.push(location);
                            }
                        }
                        setTimeout(() => {
                            dispatch(ProgressVisible());
                            dispatch(FetchingPeopleSuccess(result))
                        }, 2000);

                        for (var i = 0; i < result.length; i++) {
                            id = result[i].id;
                            var params = {id:result[i].id,name:result[i].name,count:parseInt(result[i].count),countbegin:parseInt(result[i].countbegin),email:result[i].email,image:result[i].image};
                            return Api.put('/person/'+id,params)
                                .then(res =>console.log(res))
                                .catch(error =>console.log(error));
                        }
                        return result;
                    })
                    .catch(error => console.log(error))
            })
            .catch((err) => {
                if (DocumentPicker.isCancel(err)) {
                    // User cancelled the picker, exit any dialogs or menus and move on
                } else {
                    throw err;
                }
            });
    }
}