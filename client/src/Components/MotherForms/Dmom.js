import React, { useState } from 'react';
import axios from 'axios';
import './form.css';
import {useNavigate} from "react-router-dom";

function Dmom() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [date, setDate] = useState(undefined);
    const [stage, setStage] = useState(undefined);
    const [checks, setCheck] = useState(0);


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/awwDeliveredDashboard/addMotherDelivered', {
            mothers_name: name,
            birth_date: date,
            stage: stage,
            appointment_date: "",
            number_of_checkups: checks,
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
                    <label className="formLabel" htmlFor="" style={{ marginBottom: "20px" }}>Birth Date</label>
                </div>
                <div className="row">
                    <input className="formInput" value={date} type="date" name="" onChange={(e) => setDate(e.target.value)} />
                </div>
                <br /><br />
                <div className="row">
                    <label className="formLabel" htmlFor="" style={{ marginBottom: "20px" }}>Stage</label>
                </div>
                <div className="row">
                    <input className="formInput" value={stage} type="text" name="" onChange={(e) => setStage(e.target.value)} />
                </div>
                <div className="row">
                    <label className="formLabel" htmlFor="" style={{ marginBottom: "20px" }}>No. of checkups</label>
                </div>
                <div className="row">
                    <input className="formInput" value={checks} type="number" name="" onChange={(e) => setCheck(e.target.value)} />
                </div>
                <br />
                <button type="submit" className="btn formButton" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Dmom