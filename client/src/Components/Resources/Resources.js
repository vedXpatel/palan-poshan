import React from 'react';
import './resource.css';

function Resource(){
    return(
        <>
        <div className = "resource-card">
            <div className="resource-image">
                <img src="https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJlZ25hbmN5JTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="image" height= "170 px" width= "150 px"/>
            </div>
            <div className="resource-content">
                    <h2 className="resource-title">Title</h2>
                    <p className="resource-content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis, urna ac placerat sagittis, nisi eros maximus ante, ac iaculis velit sem quis mauris. Maecenas aliquam, enim a porta aliquet, sapien urna vehicula ante, quis sodales odio nunc placerat lorem. Praesent viverra turpis ut ex rutrum, a tincidunt nibh porta. Nullam venenatis mauris eget massa porta posuere.</p>
            </div>
        </div>
        </>
    );

}

export default Resource;