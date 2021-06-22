import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Result = ({ callb, setListOfUsers, listOfUsers }) => {

    const DeleteUser = (id) => {
        axios.delete(`https://transt-api.herokuapp.com/delete/${id}`).then(() => {
            setListOfUsers(
                listOfUsers.filter((val) => {
                    return val._id !== id;
                })
            )
        })
    }

    return (
        <div className='container' >

            <div className="row bg-light mb-4 shadow-sm bg-white rounded " key={callb._id}>

                <div className="p-2">
                    <div className="border border-dark rounded-circle">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="img1" className="media-object" />
                    </div>
                </div>

                <div className="col-10">

                    <div className="row mt-2">
                        <div className="col-7 sz">
                            <label className="font-weight-bold">Гос.рег.знак:</label>
                            <div className="m-0 p-0 sz">{callb.znak}</div>
                        </div>

                        <div className="col-5  sz">
                            <label className=' font-weight-bold'>Город</label>
                            <div className="sz">{callb.city}</div>
                        </div>

                    </div>

                    <div className="row mt-2 mr-0">
                        <div className="col-9 ">
                            
                                <label className='m-0 p-0 font-weight-bold'>FIO:</label>
                                <NavLink to={`/item/${callb._id}`}> {callb.FIO}</NavLink>
                            
                        </div>

                        <div className="col-2 offset-lg-1 d-flex ">
                            <div className="mr-2">
                                
                                <NavLink to={`/create-put/${callb._id}`}>
                                    <i class="material-icons">update</i>
                                </NavLink>
                            </div>
                            <div className="cp" onClick={()=> DeleteUser(callb._id)}> <i class="material-icons">delete_forever</i></div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Result;
