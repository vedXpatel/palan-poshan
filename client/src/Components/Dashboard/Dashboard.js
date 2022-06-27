import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './dashboard.css';
import Navbar from '../Navbar/Navbar'

var num = 245;
let temp;
let editTemp;
let totalProjects = 10;



const Dashboard = () => {

    const [active, setActive] = useState("pregnant");


    var index = 0;
    const navigate = useNavigate();

    const navigateToForm1 = () => {
        if (active === "pregnant") {
            navigate("/dashboard/Pmom");
        } else {
            navigate("/dashboard/Dmom");
        }
    }

    const [data, setData] = useState([]);
    const [delivered, setDelivered] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/awwdashboard/getMothers')
            .then((response) => {
                console.log(response.data);
                setData(response.data.mothers);
            })
            .catch((error) => {
                console.log(error);
            })


        axios.get('http://localhost:5000/awwDeliveredDashboard/getMothersDelivered')
            .then((response) => {
                console.log(response.data);
                setDelivered(response.data.mothers);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])


    return (

        <div className="">
            <section>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="co-lg-2 dash-card">
                            <h3 className="card-title">Malnourished Children</h3>
                            <h1 className="dash-count">10</h1>
                        </div>
                        <div className="co-lg-2 dash-card1 ">
                            <h3 className="card-title">Pregnant Mothers</h3>
                            <h1 className="dash-count">{totalProjects}</h1>
                        </div>
                        <div className="co-lg-2 dash-card1 ">
                            <h3 className="card-title">Delivered</h3>
                            <h1 className="dash-count">{num}</h1>
                        </div>
                        <div className="co-lg-2 dash-card1 ">
                            <h3 className="card-title">Mothers To Visit</h3>
                            <h1 className="dash-count">{num}</h1>
                        </div>
                        <div className="co-lg-2 dash-card1 ">
                            <h3 className="card-title">Total Mothers</h3>
                            <h1 className="dash-count">{num}</h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid main-container">
                    {/* <h1 className="table-text">Work</h1> */}
                    <span className="fa fa-search search-icon"></span>
                    <button className="create-button btn btn-primary" onClick={navigateToForm1}>
                        <div className="container">
                            <div className="row">
                                <div>
                                    <i className="fa fa-plus-circle create-icon " aria-hidden="true"></i>
                                </div>
                                <div>
                                    <p className="create-text">Create New Account</p>
                                </div>
                            </div>
                        </div>
                    </button>
                    <section>
                        <button className="toggle-account" style={{ width: 'fit-content', border: 'none', outline: 'none', backgroundColor: 'white' }} onClick={() => { setActive("pregnant") }}>Pregnant Mothers (10)
                        </button>
                        <button href="" className="toggle-project" style={{ width: 'fit-content', border: 'none', outline: 'none', backgroundColor: 'white' }} onClick={() => { setActive("delivered") }}>Delivered Mothers (10)
                        </button>
                        {active === "pregnant" &&
                            <>
                                <div className="toggle-account-container" style={{ left: '50px', top: '146px' }}></div>
                                <table className="table table-bordered main-table">
                                    <thead>
                                        <tr style={{ height: '35px' }}>
                                            <th scope="col">#</th>
                                            <th scope="col">Mother's Name</th>
                                            <th scope="col">Due Date</th>
                                            <th scope="col">Trimester</th>
                                            <th scope="col">No of Checkups</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((mother, index) => {
                                            return (
                                                <tr>
                                                    <td>{index}</td>
                                                    <td>{mother.mothers_name}</td>
                                                    <td>{mother.due_date}</td>
                                                    <td>{mother.trimester}</td>
                                                    <td>{mother.number_of_checkups}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </>
                        }
                        {active === "delivered" &&
                            <>
                                <div className="toggle-account-container" style={{
                                    left: '254px',
                                    top: '145px'
                                }}></div>

                                <table className="table table-bordered main-table">
                                    <thead>
                                        <tr style={{ height: '35px' }}>
                                            <th scope="col">#</th>
                                            <th scope="col">Mother's Name</th>
                                            <th scope="col">Due Date</th>
                                            <th scope="col">Trimester</th>
                                            <th scope="col">No of Checkups</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {delivered.map((mother, index) => {
                                            return (
                                                <tr>
                                                    <td>{index}</td>
                                                    <td>{mother.mothers_name}</td>
                                                    <td>{mother.due_date}</td>
                                                    <td>{mother.trimester}</td>
                                                    <td>{mother.number_of_checkups}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </>
                        }
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Dashboard;