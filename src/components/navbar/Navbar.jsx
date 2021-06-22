import React from 'react';
import { NavLink } from 'react-router-dom';
import trans from '../../img/trans.png';
import moment from 'moment';
import './navbar.css';

const Navbar = () => {

    const dta = moment().format('MMMM Do YYYY, h:mm a');

    return (
        <div className="Glav container">

            <div className="col-lg-12 col-md-12 col-sm-12 col-8 Glogo mt-3">
                <img className="img-thumbnail w-75 img1" src={trans} alt="img1" />
                <h5 className="col-lg-12 trans text-primary">TRANSPORT</h5>
            </div>

            <hr />

            <div className="clock">{dta}</div>

            <hr />

            <div className=" Nbtn">
                <NavLink to='/profile' className="btn btn-primary btn-sm btn-block text-white ">Profile</NavLink>

                <NavLink to='/create' className="btn btn-primary btn-sm btn-block text-white">Create   </NavLink>




                <NavLink to='/about' className="btn btn-primary btn-sm btn-block text-white mb-5">About us</NavLink>
            </div>

        </div>
    )
}

export default Navbar;