import * as React from "react"
import './../css/index.css'
import GIF from './../images/party.gif'
import Signup from './../elements/signup.js'
// markup
const IndexPage = () => {
  return (
    <div className="text-light" style={{width:`100%`}}>
<div className='hero'>
<p className = 'intro' ><i>welcome to the</i> </p>
<h1 className = 'header'> Make More Art Club!    <img style={{height:`3rem`, marginLeft:`auto`, marginRight:`auto`}} src={GIF} /></h1>
<p className = 'subheader'><i>// A prompt a day to create for creation's sake.</i> </p>
<Signup/>
</div>
</div>
  )
}

export default IndexPage
