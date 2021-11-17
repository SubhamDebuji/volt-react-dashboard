import React, { useState, useEffect } from 'react'
import { listall, imageList } from '../firebase';
const History = () => {

    const [load, setload] = useState(false);
    const user = localStorage.getItem('user');
    var files = 0;
    useEffect(() => {
        setTimeout(() => {

            // listall('images/');
            setload(true);
        }, 1000)
    }, [1])

    const list = () => {
        listall(`images/`);
        // listallname('images/');
        files = 1;
        console.log(imageList);
        // console.log(files)
    }


    console.log(imageList.length);



    return (
        <>
            <div class="container-fluid">
                <div class="row main-content bg-success text-center">

                </div>
            </div>

            <div className="container" style={{ height: "500px", overflowY: "scroll" }}>
                <table class="table m-auto">
                    <thead style={{ backgroundColor: "#008080" }}>
                        <tr className="text-light">
                            <th scope="col">#</th>
                            <th scope="col">url</th>

                        </tr>
                    </thead>
                    {
                        (load) ?
                            imageList.map((item, key) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <th scope="row">{key}</th>
                                            <td><a href={item[0]}>{item[1]}</a></td>
                                        </tr>
                                    </tbody>

                                )

                            }) : <></>
                    }
                </table>
            </div>


        </>

    )
}

export default History
