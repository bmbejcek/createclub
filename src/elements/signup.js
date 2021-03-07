import React, { PureComponent }  from "react"
import './../css/signup.css'
import ReactModal from 'react-modal'
import GIF from './../images/instructions.gif'

var validator = require("./../js/validate.js");

    const handleOnSubmit = e => {
      
      const form = e.target;
      console.log(e.target)
      const f = new FormData(form)
      console.log(f)

      fetch('/.netlify/functions/signup', {
        method: "POST",
        body: new FormData(form)
      })
        
    };

export default class Signup extends PureComponent {

  state = {
    email: "",
    success: false,
    submitting: false,
    message: "",
    isModalOpen: true,
  }

  componentDidMount() {
    ReactModal.setAppElement('#main')
 }

  handleModalClose = event => {
    this.setState({ isModalOpen: false })
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value

    this.setState({
      'email': value,
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const form = event.target;
    if (validator.validate(this.state.email, this.state.name)) {
      this.setState({submitting: true})
      fetch('/.netlify/functions/signup', {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
        })
      }).then((response) => {
        console.log(response);
      this.setState({submitting:false})
      if(response.status==200){
        this.setState({success:true});
        form.reset();
        this.setState({message:"Submitted!"})
      }
      else{
        this.setState({message:"Something went wrong. Contact brett@brettbejcek.com for help."})
      }
  })

      
    }
    else {
      if(this.state.name.length>0)
        this.setState({message: "No spam please!"})
      else
        this.setState({message: "Oops! Doesn't look like that is a valid email. Try again!"})
    };

  }
  render()
  {
    return (
    <div style={{textAlign:`center`}}>
    <ReactModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Example Modal In Gatsby"
        >
          <h2 style={{fontFamily:`Poppins`}}>Congrats on joining the club!</h2>
          <p style={{fontFamily:`Poppins`}}> This is going to be fantastic. We are going to create so many fun things. Check your email to make sure that you got your welcome email. If by some mistake they ended up in the Spam or Promotions Folders, be sure to move them over to your normal inbox!</p>
          <img style={{maxHeight:`40vh`, width:`auto`}}  src={GIF} />
          <button onClick={this.handleModalClose}>Close Modal</button>
        </ReactModal>
    <div>
         <div>
            <form className="form" onSubmit={this.handleOnSubmit} style = {{justifyContent:`left`, display:`flex`,paddingLeft:`10px`}}>
            <div className="form-group" style ={{display:`contents`}}>
                <input onChange={this.handleInputChange} style = {{fontFamily:`Poppins`, width:`80%`,background: `black`, color:`white`, borderColor:`black`,borderBottom:`5px solid white`}}type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="hit me with that email"/>
            </div>
            <button style = {{fontFamily:`Poppins`, border:`black 0px none`,color:`white`, background:`black`, fontSize: `medium`, overflow:`visible`, zIndex:`10`, marginLeft:`10px`}} type="submit"  disabled={this.state.submitting}>
                <b>{this.state.submitting ? 'Submitting' : 'Submit'}</b>
            </button>
            </form>
            <div style = {{width:`100%`}}>
            {this.state.status && (
                <p style = {{fontFamily:`Poppins`}} className={!this.status.ok ? "errorMsg" : ""}>
                {this.state.message}
                </p>
            )}
            </div>
        </div>
      </div>

  </div>

    );}
  };
