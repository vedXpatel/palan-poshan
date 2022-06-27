import React, { useContext, useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './fmch.css';
import Navbar from '../Navbar/Navbar'

var num = 245;
let temp;
let editTemp;
let totalProjects = 10;



const Dashboard = () => {


    var index = 0; 

    const [data,setData] = useState([]);
    const [delivered,setDelivered] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/fmchdashboard')
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    },[])


    return (

        <div className="">
            <section>
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="co-lg-2 dash-card">
                            <h3 className="card-title">Total AWW Workers</h3>
                            <h1 className="dash-count">10</h1>
                        </div>
                        <div className="co-lg-2 dash-card1 ">
                            <h3 className="card-title">Total mothers</h3>
                            <h1 className="dash-count">{totalProjects}</h1>
                        </div>
                        <div className="co-lg-2 dash-card1 ">
                            <h3 className="card-title">Malnourished to nourished</h3>
                            <h1 className="dash-count">{num}</h1>
                        </div>
                        <div className="co-lg-2 dash-card1 ">
                            <h3 className="card-title">Delivered</h3>
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
                    <section>
                        <button className="toggle-account" style={{ width: 'fit-content',border:'none',outline:'none',backgroundColor:'white' }} >Anganwadi Workers (10)
                        </button>
                        
        
                        
              
                        <div className="toggle-account-container" style={{left: '50px',top: '146px'}}></div>
                        <table className="table table-bordered main-table">
                            <thead>
                                <tr style={{ height: '35px' }}>
                                    <th scope="col">#</th>
                                    <th scope="col">AWW's name</th>
                                    <th scope="col">Number of Mother's Counselling</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Mother’s counselled today</th>
                                     <th scope="col">Contact</th>  
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((aww,index)=>{
                                    return(
                                        <tr>
                                            <td>{index}</td>
                                            <td>{aww.aww_name}</td>
                                            <td>{aww.number_of_mothers_counselling}</td>
                                            <td>{aww.location}</td>
                                            <td>{aww.number_of_mothers_counselling_today}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
            
                        
                        
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Dashboard;