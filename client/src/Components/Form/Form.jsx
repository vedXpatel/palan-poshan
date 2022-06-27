import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

function Form() {


    const handleSubmit = async () => {
        await axios.post("http://localhost:5000/consultation",{
            status:pregnant,
            trimester:trimester,
            height:height,
            weight:weight,
            vaccine1:vaccine1,
            vacinne2:vaccine2,
            medication1:medication1,
            medication2:medication2,
            allergy:allergy,
            abusive:abusive
        })
        .then((response) => {
            setConsultation(response.data.consultation);
        })
        .catch((error) => {
            console.log(error);
        })

        setActive("Consultation");
    }

    const [consultation,setConsultation] = useState([]);
    const [active, setActive] = useState("basic");
    const [pregnant, setPregnant] = useState(0);
    const [trimester, setTrimester] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [vaccine1,setVaccine1] = useState(false);
    const [vaccine2,setVaccine2] = useState(false);
    const[medication1,setMedication1] = useState(false);
    const [medication2,setMedication2] = useState(false);
    const [allergy,setAllergy] = useState(false);
    const [abusive,setAbusive] = useState(false);
    const [age,setAge] = useState("");

    const GoToTree1 = () => {
        setPregnant(1);
        setActive("tree1");
    }
    const GoToTree2 = () => {
        setActive("tree2");
    }

    const getBabyData = (e) => {
        e.preventDefault();
        setTrimester(e.target.value);
        setActive("babyData");
    }

    return (
        <>
            <div className="form1">
                <div className="container">
                    {active === "basic" &&
                        <>
                            <div className="row">
                                <label className="formLabel1" htmlFor="">Status of Delivery</label>
                            </div>
                            <div className="row">
                                <div className="col-md-auto">
                                    <button className="btn formButton1" onClick={GoToTree1}>Pregnant</button>
                                </div>
                                <div className="col-md-auto">
                                    <button className="btn formButton1" onClick={GoToTree2}>Post Delivery</button>
                                </div>
                            </div>
                        </>
                    } {active === "tree1"
                        &&
                        <>
                            <div className="row">
                                <label className="formLabel1" htmlFor="">What trimester the mother in?</label>
                            </div>
                            <div className="row">
                                <div className="col-md-auto">
                                    <button className="btn formButton1" value={1} onClick={getBabyData}>0-3 months</button>
                                </div>
                                <div className="col-md-auto">
                                    <button className="btn formButton1" value={2} onClick={getBabyData}>3-6 months</button>
                                </div>
                                <div className="col-md-auto">
                                    <button className="btn formButton1" value={3} onClick={getBabyData}>6-9 months</button>
                                </div>
                            </div>
                        </>
                    }
                    {active === "tree2" &&
                        <>
                            <div className="row">
                                <label className="formLabel1" htmlFor="">How old is the baby?</label>
                            </div>
                            <div className="row">
                                <div className="col-md-auto">
                                    <button className="btn formButton1"  onClick={()=> {setAge("NewBorn") ; setActive("babyData")}}>NewBorn</button>
                                </div>
                                <div className="col-md-auto">
                                    <button className="btn formButton1" onClick={()=> {setAge("Infant") ; setActive("babyData")}}>Infant</button>
                                </div>
                                <div className="col-md-auto">
                                    <button className="btn formButton1" onClick={()=> {setAge("Toddler"); setActive("babyData")}}>Toddler</button>
                                </div>
                            </div>
                        </>
                    }
                    {active === "babyData" &&
                        <>
                            <div className="row">
                                <label className="formLabel1" htmlFor="" style={{ marginBottom: "20px" }}>Height : <span style={{ textDecoration: "underline" }}>{height} m </span> </label>
                            </div>
                            <div className="row">
                                <input className="formInput1 form-range" style={{border:"none"}} min="0" max="2" value={height} type="range" step={0.10} name="" onChange={(e) => setHeight(e.target.value)} />
                            </div>
                            <br /><br />
                            <div className="row">
                                <label className="formLabel1" htmlFor="" style={{ marginBottom: "20px" }}>Weight : <span style={{ textDecoration: "underline" }}>{weight} kg </span> </label>
                            </div>
                            <div className="row">
                                <input className="formInput1 form-range" style={{border:"none"}} min="0" max="100" value={weight} type="range" name="" onChange={(e) => setWeight(e.target.value)} />
                            </div>
                            <br />
                            <br />
                            <div className="row">
                            <div className="col-md-auto">
                                    <button className="btn formButton1" onClick={()=>setActive("vaccine")}>Next</button>
                                </div>
                            </div>
                        </>
                    }
                    {active === "vaccine" && 
                        <>
                             <div className="row">
                                <label className="formLabel1" htmlFor="">Have you take vaccine ABC?</label>
                            </div>
                            <div className="row">
                                <div className="col-md-auto">
                                    <button className="btn formButton1"  onClick={()=>{setVaccine1(true)}}>Yes</button>
                                </div>
                                <div className="col-md-auto">
                                    <button className="btn formButton1" onClick={()=>{setVaccine1(false)}}>No</button>
                                </div>
                            </div>
                            <br /><br />
                             <div className="row">
                                <label className="formLabel1" htmlFor="">Have you take vaccine BCD?</label>
                            </div>
                            <div className="row">
                                <div className="col-md-auto">
                                    <button className="btn formButton1" onClick={()=>{setVaccine2(true); setActive("medication")}}>Yes</button>
                                </div>
                                <div className="col-md-auto">
                                    <button className="btn formButton1" onClick={()=>{setVaccine2(false); setActive("medication")}}>No</button>
                                </div>
                            </div>
                        </>
                    }
                    {active === "medication" && 
                        <>
                             <div className="row">
                                <label className="formLabel1" htmlFor="">Have you taken medicine DEF?</label>
                            </div>
                            <div className="row">
                                <div className="col-md-auto">
                                    <button className="btn formButton1"  onClick={()=>{setMedication1(true)}}>Yes</button>
                                </div>
                                <div className="col-md-auto">
                                    <button className="btn formButton1" onClick={()=>{setMedication1(false)}}>No</button>
                                </div>
                            </div>
                            <br /><br />
                             <div className="row">
                                <label className="formLabel1" htmlFor="">Have you taken medicine XYZ?</label>
                            </div>
                            <div className="row">
                                <div className="col-md-auto">
                                    <button className="btn formButton1" onClick={()=>{setMedication2(true);setActive("allergy")}}>Yes</button>
                                </div>
                                <div className="col-md-auto">
                                    <button className="btn formButton1" onClick={()=>{setMedication2(false);setActive("allergy")}}>No</button>
                                </div>
                            </div>
                        </>
                    }   
                    {active === "allergy" && 
                        <>
                             <div className="row">
                                <label className="formLabel1" htmlFor="">Do you have any allergies?</label>
                            </div>
                            <div className="row">
                                <div className="col-md-auto">
                                    <button className="btn formButton1" onClick={()=>{setAllergy(true)}}>Yes</button>
                                </div>
                                <div className="col-md-auto">
                                    <button className="btn formButton1" onClick={()=>{setAllergy(false)}} >No</button>
                                </div>
                            </div>
                            <br /><br />
                             <div className="row">
                                <label className="formLabel1" htmlFor="">Is your relationship abusive?</label>
                            </div>
                            <div className="row">
                                <div className="col-md-auto">
                                    <button className="btn formButton1" onClick={()=>{setAbusive(true)}} >Yes</button>
                                </div>
                                <div className="col-md-auto">
                                    <button className="btn formButton1"  onClick={()=>{setAbusive(false)}} >No</button>
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                            <div className="col-md-auto">
                                    <button className="btn formButton1" onClick={handleSubmit}>Get Consultation</button>
                                </div>
                            </div>

                            </>
                    
                    }
                    {active==="Consultation" && 
                        <>
                        <a href="/dashboard" style={{fontFamily:"Poppins",left:"10vw",top:"10vh",color:'white',fontSize:"28px",position:"relative"}}>Go to Dashboard</a>
                        <div className="consult" style= {{position:"relative",fontFamily:"Poppins",left:"20vw",top:"30vh"}}>
                            <ul>
                                <h1 style={{textDecoration:"underline"}}>Advice for the mother: </h1>
                        {consultation.map((data)=>{
                            return(
                                <li><h1>{data}</h1></li>
                            )
                        })}
                            </ul>
                        </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Form