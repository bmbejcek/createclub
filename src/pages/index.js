import * as React from "react"
import './../css/index.css'
import GIF from './../images/party.gif'
import Signup from './../elements/signup.js'
import ArtExample from './../elements/art_example.js'
import ItemExample from './../elements/item_example.js'
import CreateExample from './../elements/create_example.js'

const IndexPage = () => {
  return (
    <div className="text-light" style={{width:`100%`}}>
<div className='hero'>
<p className = 'intro' ><i>welcome to the</i> </p>
<h1 className = 'header'> Make More Art Club!    <img style={{height:`3rem`, marginLeft:`auto`, marginRight:`auto`, minWidth:`4.5rem`}}  src={GIF} /></h1>
<p className = 'subheader'><i>20 minutes of creativity a few times a week</i> </p>
<div style={{paddingLeft:`10px`, fontFamily:`Poppins`, marginBottom:`40px`, minHeight:`50px`}}><CreateExample/> <ArtExample/> <ItemExample/></div>
<Signup/>

</div>
</div>
  )
}

export default IndexPage
