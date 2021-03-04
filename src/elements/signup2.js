import React, { PureComponent } from 'react';
import SignupCopy from './signupcopy.js';
import FadeIn from 'react-fade-in'
import Cookies from 'js-cookie';

var validator = require("./../js/validate.js");
var shareUrl = "https://sillygoosereceipts.com"
var quote = "Calling all silly geese."

export default class Signup extends PureComponent {

  state = {
    email: "",
    success: false,
    submitting: false,
  }
  handleInputChange = event => {
    const value = target.value

    this.setState({
      'email': value,
    })
  }


  handleSubmit = event => {
    event.preventDefault()
    if (validator.validate(this.state.email, this.state.name)) {
      this.setState({message:""})
      fetch('/.netlify/functions/signup', {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
        })
      }).then((response) => {
  })
      this.setState({success:true});
    }
    else {
      if(this.state.name.length>0)
        this.setState({message: "Oops, something went wrong! Email brett@brettbejcek.com to let him know!"})
      else
        this.setState({message: "Oops! Doesn't look like that is a valid email. Try again!"})
    };

  }

  render() {
    return (
      <div className = "bodyElement" style={{marginTop:`6vh`}}>
      <div ref={this.refA}>
      <div id='signup'><br/><h2 style = {{fontFamily:`receipt, Sans-Serif`, color:`black`}}>SIGN UP</h2></div>
      <SignupCopy/>
      <br/>
      <div className={this.state.success ? 'emailFadeOut' : 'emailFadeIn'}>
      <form onSubmit={this.handleSubmit} style = {{display:`flex`, verticalAlign:`baseline`, marginBottom:`0.5rem`}}>
          <input
            type="text"
            name="email"
            placeholder = "you@example.com"
            style = {{color:`#0000EE`,fontFamily:`receipt, Sans-Serif`,width:`75%`, border:`2px solid #0000EE`, borderRadius:`0`, height:`2.5rem`, paddingLeft:`1rem`}}
            value={this.state.email}
            onChange={this.handleInputChange}
          />

        <button type="submit" style = {{fontFamily:`receipt`, height:`2.5rem`, border:`2px solid #0000EE`, backgroundColor:`#0000EE`, color:`white`, width:`25%`}}>JOIN</button>
            <label class="ohnohoney" for="name"></label>
            <input class="ohnohoney" autocomplete="off" type="text" id="name" name="name" placeholder="Your name here" value={this.state.name} onChange={this.handleInputChange}/>
      </form>
      <span style = {{fontFamily:`receipt, Sans-Serif`, color:`#FF0000`, fontSize:`small`, minHeight:`3rem`, marginBottom:`0`}}> {this.state.message}</span>

      </div>
      <div style = {{backgroundColor:`#0000EE`,padding:`1rem`}} className={this.state.success ? 'emailFadeIn' : 'emailFadeOut'}>
      <p style = {{fontFamily:`receipt`,color:`#FFFFFF`}}> <b>This is going to be awesome.</b><br/><br/>Know any other lovely, kind, caring, and adventurous individuals like yourself? Share this with them. </p>
      <div id = "shareholder" style = {{maxWidth:'600px', width:`100%`, marginTop:`1rem`}}>
      <FacebookShareButton
        url={shareUrl}
        quote={quote}
        style = {{marginRight:`10px`}}>
        <FacebookIcon
        size={40}
        iconFillColor={"#0000EE"}
        round />
        </FacebookShareButton>

        <TwitterShareButton
        url={shareUrl}
        quote={quote}
        style = {{marginRight:`10px`}}>
        <TwitterIcon
        size={40}
        iconFillColor={"#0000EE"}
        round />
        </TwitterShareButton>

        <WhatsappShareButton
        url={shareUrl}
        quote={quote}
        style = {{marginRight:`10px`}}>
        <WhatsappIcon
        size={40}
        iconFillColor={"#0000EE"}
        round />
        </WhatsappShareButton>

        <RedditShareButton
        url={shareUrl}
        quote={quote}
        style = {{marginRight:`10px`}}>
        <RedditIcon
        size={40}
        iconFillColor={"#0000EE"}
        round />
        </RedditShareButton>

        <EmailShareButton
        url={shareUrl}
        quote={quote}
        style = {{marginRight:`10px`}}>
        <EmailIcon
        size={40}
        iconFillColor={"#0000EE"}
        round />
        </EmailShareButton>
        </div>
      </div>

      </div>
      </div>);}

}
