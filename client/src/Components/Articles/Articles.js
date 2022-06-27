import React from 'react'
import {ReactComponent as Pregnancy} from './bg.svg';
import './articles.css'
import Navbar from '../Navbar/Navbar'

function Articles() {
  return (
    <>
    <div className = "art-body">
      <Navbar/>
        <div className="art-bg">
        <Pregnancy className = "article-bg-photo"/>
        <p className = "article-heading">Title</p>
        <p className="article-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis, urna ac placerat sagittis, nisi eros maximus ante, ac iaculis velit sem quis mauris. Maecenas aliquam, enim a porta aliquet, sapien urna vehicula ante, quis sodales odio nunc placerat lorem. Praesent viverra turpis ut ex rutrum, a tincidunt nibh porta. Nullam venenatis mauris eget massa porta posuere.</p>
        <p className="article-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis, urna ac placerat sagittis, nisi eros maximus ante, ac iaculis velit sem quis mauris. Maecenas aliquam, enim a porta aliquet, sapien urna vehicula ante, quis sodales odio nunc placerat lorem. Praesent viverra turpis ut ex rutrum, a tincidunt nibh porta. Nullam venenatis mauris eget massa porta posuere.</p>
        <p className="article-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis, urna ac placerat sagittis, nisi eros maximus ante, ac iaculis velit sem quis mauris. Maecenas aliquam, enim a porta aliquet, sapien urna vehicula ante, quis sodales odio nunc placerat lorem. Praesent viverra turpis ut ex rutrum, a tincidunt nibh porta. Nullam venenatis mauris eget massa porta posuere.</p>

        </div>
        </div>
    </>
  )
}

export default Articles