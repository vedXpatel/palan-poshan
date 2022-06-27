import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

import {useNavigate} from "react-router-dom";

function Pmom() {

    const [name, setName] = useState("");
    const [date, setDate] = useState(undefined);
    const [checkup, setCheckup] = useState(0);
    const [trimester, setTrimester] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/awwdashboard/addMother', {
            mothers_name: name,
            due_date: date,
            trimester: trimester,
            appointment_date: "",
            number_of_checkups: checkup,
        })
            .then(function (response) {
                console.log(response);
                navigate("/dashboard")
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <>
            <div className="form">
                <div className="row">
                    <label className="formLabel" htmlFor="" style={{ marginBottom: "20px" }}>Enter Mother's Name</label>
                </div>
                <div className="row">
                    <input className="formInput" value={name} type="text" name="" onChange={(e) => setName(e.target.value)} />
                </div>
                <br /><br />
                <div className="row">
                    <label className="formLabel" htmlFor="" style={{ marginBottom: "20px" }}>Due Date</label>
                </div>
                <div className="row">
                    <input className="formInput" value={date} type="date" name="" onChange={(e) => setDate(e.target.value)} />
                </div>
                <br /><br />
                <div className="row">
                    <label className="formLabel" htmlFor="" >Trimester</label>
                </div>
                <div className="row">
                    <div className="col-md-auto">
                        <button className="btn formButton" value={1} onClick={(e) => setTrimester(e.target.value)}>0-3 months</button>
                    </div>
                    <div className="col-md-auto">
                        <button className="btn formButton" value={2} onClick={(e) => setTrimester(e.target.value)}>3-6 months</button>
                    </div>
                    <div className="col-md-auto">
                        <button className="btn formButton" value={3} onClick={(e) => setTrimester(e.target.value)}>6-9 months</button>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <label className="formLabel" htmlFor="" style={{ marginBottom: "20px" }}>Number of Checkups</label>
                </div>
                <div className="row">
                    <input className="formInput" type="number" name="" />
                </div>
                <br />
                <button type="submit" className="btn formButton" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Pmom