import React, { PureComponent }  from "react"
import { StaticQuery, graphql } from "gatsby"
import './../css/index.css'
import GIF from './../images/party.gif'
import Signup from './../elements/signup.js'
import ArtExample from './../elements/art_example.js'
import ItemExample from './../elements/item_example.js'
import CreateExample from './../elements/create_example.js'
import { Helmet } from "react-helmet"


export default class Index extends PureComponent {
	componentDidMount() {
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
 }
 render(){

  return (

    <div className="text-light" style={{width:`100%`, textAlign:`center`}}>
     	 	<StaticQuery
  query={graphql`
    query {
      fileName: file(relativePath: { eq: "share.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
  render={data => (
    <Helmet title="Create More Art Club">
  <meta name="description" content="Just a group of cool cats creating art once a week." />
  <meta name="image" content={data.fileName.childImageSharp.fluid.src} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Create More Art Club" />
  <meta property="og:description" content="Just a group of cool cats creating art once a week." />
  <meta property="og:image" content={data.fileName.childImageSharp.fluid.src} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Create More Art Club" />
  <meta name="twitter:description" content="Just a group of cool cats creating art once a week." />
  <meta name="twitter:image" content={data.fileName.childImageSharp.fluid.src} />
    </Helmet>
      )}
/>
    <div id="main"/>
<div className='hero'>
<p className = 'intro' style={{marginTop:`30px`}}><i>welcome to the</i> </p>
<h1 className = 'header'> Create More Art Club!</h1>
<p><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /></p>
<p className = 'subheader'>A weekly prompt to create something, randomized just for you:</p>
<div style={{paddingLeft:`10px`, fontFamily:`Poppins`, marginBottom:`0px`, minHeight:`80px`}}>"<CreateExample/> <ArtExample/> <ItemExample/>"</div>
<Signup/>

</div>
</div>
  )
}
}
