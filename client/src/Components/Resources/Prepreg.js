import React from 'react';
import Resource from './Resources';
import Navbar from '../Navbar/Navbar';
import './resource.css'
import { Link } from 'react-router-dom';

const PrePregResources = () => {

    return (
        <div>
            <Navbar />
            <h1 className="prepreg-title"> Pre-Pregnancy Resources</h1>
            <div className="prepreg-shift">
            <Link to="/articles" className="article-link"><Resource/></Link>
            <Link to="/articles" className="article-link"><Resource/></Link>
            <Link to="/articles" className="article-link"><Resource/></Link>
            </div>
        </div >
    )
}

export default PrePregResources;