import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { BsFillBookFill } from 'react-icons/bs';
import { AiFillBell, AiOutlineForm } from 'react-icons/ai'
import { MdPregnantWoman,MdOutlineChildFriendly } from 'react-icons/md'
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate();

    const navigateToDashBoard = () => {
        navigate("/dashboard");
    }

    const navigateToResources = () => {
        navigate("/resources");
    }

    const navigateToReminders = () => {
        navigate("/appointments");
    }
    return (
        <div>
            <section>
                <div className="container-navigation">

                    <Link to="/dashboard"> <AiFillHome className="home-icon" /></Link>


                    <Link to="/prepreg"><MdPregnantWoman className="prepreg-icon" /></Link>
                    <Link to="/postpreg"><MdOutlineChildFriendly className="postpreg-icon" /></Link>

                    <Link to="/appointments"> <AiFillBell className="reminders-icon" /></Link>
                    <Link to="/form"><AiOutlineForm className="form-icon" /></Link>

                    <div className="profile-icon"><div className="profile-init">AP</div></div>
                </div>
            </section >
        </div >

    )
}

export default Navbar;