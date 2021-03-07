import * as React from "react"
import './../css/index.css'
import GIF from './../images/party.gif'
import Signup from './../elements/signup.js'
import ArtExample from './../elements/art_example.js'
import ItemExample from './../elements/item_example.js'
import CreateExample from './../elements/create_example.js'

const IndexPage = () => {
  return (
    <div className="text-light" style={{width:`100%`, textAlign:`center`}}>
    <div id="main"/>
<div className='hero'>
<p className = 'intro' ><i>welcome to the</i> </p>
<h1 className = 'header'> Create More Art Club!</h1>
<p><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /><img style={{height:`1rem`}}  src={GIF} /></p>
<p className = 'subheader'>A weekly prompt to create something, randomized just for you:</p>
<div style={{paddingLeft:`10px`, fontFamily:`Poppins`, marginBottom:`0px`, minHeight:`80px`}}>"<CreateExample/> <ArtExample/> <ItemExample/>"</div>
<Signup/>

</div>
</div>
  )
}

export default IndexPage
