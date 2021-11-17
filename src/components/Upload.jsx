import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storage } from '../firebase';
function Uplaod(user) {
    const [image, setimage] = useState(null);
    const [sent, setsent] = useState(0);
    const [url, seturl] = useState("");



    console.log(user.id);
    const handleChange = e => {
        if (e.target.files[0]) {
            setimage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        toast("file uploaded sucessfully", {
            progressClassName: "custom-progress",
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

        });
        const uploadTask = storage.ref(`${user.id}/images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                        seturl(url)
                    })
            }
        )
        setsent(1);

    }

    // console.log(storage.ref().child('images').listAll());
    // console.log("image :", image);
    return (
        <>



            <div class="container-fluid mt-5">
                <div class="row main-content  text-center" style={{ background: "#fff" }}>

                    <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div class="container-fluid">
                            {/* <div class="row">
                                <h2>File Can Be Anytype</h2>
                            </div> */}
                            <div class="row">
                                <form control="" class="form-group">
                                    <div class="row p-4">
                                        <input type="file" name="file" onChange={handleChange} />
                                    </div>
                                    <div class="row">
                                        {
                                            (sent !== 0) ?
                                                <a href={url} className="text-center">Link to your file</a> : <></>
                                        }
                                    </div>

                                    <div class="row">
                                        <button type="button" class="btn button w-100 text-white" style={{ background: "#262B40" }} onClick={handleUpload}>Submit</button>

                                        <ToastContainer />
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
export default Uplaod