import React from 'react';
import Resource from "./Resources.js";
import {Link} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './resource.css'
function PostPregResources(){
    return (
        <div>
            <Navbar />
            <h1 className="prepreg-title"> Post-Pregnancy Resources</h1>
            <div className="prepreg-shift">
            <Link to="/articles" className="article-link"><Resource/></Link>
            <Link to="/articles" className="article-link"><Resource/></Link>
            <Link to="/articles" className="article-link"><Resource/></Link>
            </div>
        </div>
        
    );

}

export default PostPregResources;