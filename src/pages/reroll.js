import React, { PureComponent }  from "react"

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
    "challenge":"Getting a different challenge for you...",
    "fetching":true
  }

  componentDidMount() {
    fetch("http://us-central1-create-more.cloudfunctions.net/get-random-challenge")
    .then( (response) => {
              return response.json() })
                  .then( (json) => {
                      this.setState({challenge: json.challenge, fetching: false})
                  })
 }

  reRoll = event => {
    this.setState({challenge: "Getting a different challenge for you...", fetching:true})
    fetch("http://us-central1-create-more.cloudfunctions.net/get-random-challenge")
        .then( (response) => {
              return response.json() })
                  .then( (json) => {
                      this.setState({challenge: json.challenge})
                  })
  }
  render()
  {
    return (
    <div style={{textAlign:`center`}}>
    <p style={{fontFamily:`Poppins`,color:`white`, paddingLeft:`30px`, paddingRight:`30px`, fontSize:`x-large`}}>{this.state.challenge}</p>
<button disbabled={this.state.fetching} onClick={this.reRoll}style={{fontFamily:`Poppins`,color:`white`, background:`black`, border:`white solid 3px`}}>Reroll</button>

  </div>

    );}
  };
