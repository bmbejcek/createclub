import React, { PureComponent }  from "react"
import './../css/signup.css'
import ReactModal from 'react-modal'
import GIF from './../images/instructions.gif'
import { trackCustomEvent } from "gatsby-plugin-google-analytics"


var validator = require("./../js/validate.js");

export default class Signup extends PureComponent {

  state = {
    email: "",
    success: false,
    submitting: false,
    message: "",
    isModalOpen: false,
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
      this.setState({message: ""})
      fetch('/.netlify/functions/signup', {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
        })
      })

    setTimeout(
      function() {
      this.setState({submitting:false})
      this.setState({success:true});
      trackCustomEvent({
            category: "Sign Up",
            action: "Success",
          });
      form.reset();
      this.setState({isModalOpen: true})
      }
    .bind(this),
    1500);
      
    }
    else {
        this.setState({message: "Oops! Doesn't look like that is a valid email. Try again!"})
        trackCustomEvent({
          category: "Sign Up",
          action: "Invalid Email",
        })
    };

  }
  render()
  {
    return (
    <div style={{textAlign:`center`}}>
    <ReactModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          shouldFocusAfterRender={true}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          shouldReturnFocusAfterClose={true}
        >
          <div style={{height:`10px`}}><button style={{fontFamily:`Poppins`, fontWeight:`700`, float:`right`, fontSize:`large`, background:`white`}} onClick={this.handleModalClose}>X</button></div>
          <h2 className="successHeader" style={{fontFamily:`Poppins`, marginTop:`30px`}}>Congrats on joining the club!</h2>
          <p className="successDescription" style={{fontFamily:`Poppins`}}> This is going to be fantastic. We are going to create so much together! Check your email to make sure that you got your welcome email. If by some mistake they ended up in the Spam or Promotions Folders, be sure to move them over to your normal inbox!</p>
          <div>
          <img style={{maxHeight:`40vh`, maxWidth:`100%`}}  src={GIF} />
          </div>
        </ReactModal>
    <div>
         <div>
            <form className="form" onSubmit={this.handleOnSubmit} style = {{justifyContent:`left`, display:`flex`,paddingLeft:`10px`}}>
            <div className="form-group" style ={{display:`contents`}}>
                <input onChange={this.handleInputChange} style = {{fontFamily:`Poppins`, width:`80%`,background: `black`, color:`white`, borderColor:`black`,borderBottom:`5px solid white`}}name="email" className="form-control" placeholder="hit me with that email"/>
            </div>
            <button style = {{fontFamily:`Poppins`, border:`black 0px none`,color:`white`, background:`black`, fontSize: `medium`, overflow:`visible`, zIndex:`10`, marginLeft:`10px`}} type="submit"  disabled={this.state.submitting}>
                <b>{this.state.submitting ? 'Submitting' : 'Submit'}</b>
            </button>
            </form>
            <div style = {{width:`100%`}}>
                <p style = {{fontFamily:`Poppins`, minHeight:`40px`, fontSize:`small`, marginBottom:`0px`}}>
                {this.state.message}
                </p>
            </div>
        </div>
      </div>

  </div>

    );}
  };
