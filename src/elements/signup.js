import React, { useState }  from "react"
import './../css/signup.css'
const MyForm = () => {

    const [serverState, setServerState] = useState({
      submitting: false,
      status: null,
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      console.log(form);
      setServerState({ submitting: true });
      console.log(form)
      fetch('/.netlify/functions/hello-world', {
        method: "POST",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
        <div>

    <div>
         <div>
            <form className="form" onSubmit={handleOnSubmit} style = {{justifyContent:`left`, display:`flex`,paddingLeft:`40px`}}>
            <div className="form-group" style ={{display:`contents`}}>
                <input style = {{fontFamily:`Poppins`, width:`60%`,background: `black`, color:`white`, borderColor:`black`,borderBottom:`5px solid white`}}type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="hit me with that email"/>
            </div>
            <button style = {{fontFamily:`Poppins`, border:`black 0px none`,color:`white`, background:`black`, fontSize: `medium`, overflow:`visible`, zIndex:`10`, marginLeft:`10px`}} type="submit"  disabled={serverState.submitting}>
                <b>Submit</b>
            </button>
            </form>
            <div style = {{width:`100%`}}>
            {serverState.status && (
                <p style = {{fontFamily:`Poppins`}} className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
                </p>
            )}
            </div>
        </div>
      </div>

  </div>

    );
  };

  export default MyForm;
