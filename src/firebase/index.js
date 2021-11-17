import firebase from 'firebase/compat/app';
import "firebase/compat/storage"


let imageList = [];

const firebaseConfig = {
    apiKey: "AIzaSyCTzGNA5J6c7dbOtKyceSOOJrJkeo0--zg",
    authDomain: "fir-file-uploader-e0757.firebaseapp.com",
    projectId: "fir-file-uploader-e0757",
    storageBucket: "fir-file-uploader-e0757.appspot.com",
    messagingSenderId: "82657387378",
    appId: "1:82657387378:web:5cff12a4b0d8370e5cf3eb",
    measurementId: "G-0SRJM9N43V"
};


function listall(folder) {
    const storageRef = firebase.storage().ref();

    // [START storage_list_all]
    // Create a reference under which you want to list
    var listRef = storageRef.child(folder);

    // Find all the prefixes and items.
    listRef.listAll()
        .then((res) => {
            res.prefixes.forEach((folderRef) => {
                // All the prefixes under listRef.
                // You may call listAll() recursively on them.
            });
            res.items.forEach((itemRef) => {
                itemRef.getDownloadURL().then((url) => {

                    imageList.push([[url], [itemRef.name]]);

                })
            });
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });
    // [END storage_list_all]

}
firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();

export { storage, imageList, listall, firebase as default };
