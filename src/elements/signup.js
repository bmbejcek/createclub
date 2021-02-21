import React, { useState }  from "react"
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
      setServerState({ submitting: true });
        fetch('/.netlify/functions/signup', {
        method: "POST",
        body: JSON.stringify({
        email: new FormData(form),
        })
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
            <form onSubmit={handleOnSubmit} style = {{justifyContent:`center`, display:`flex`}}>
            <div className="form-group" style ={{display:`contents`}}>
                <input style = {{width:`60%`, height:`20px`,textIndent:`10px`,border:`5px solid #f624af`}}type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <button style = {{fontFamily:`Courier`, fontSize: `medium`, height:`25px`, overflow:`visible`, zIndex:`10`, marginLeft:`10px`}} type="submit" className="btn btn-primary"  disabled={serverState.submitting}>
                <b><u>Submit</u></b>
            </button>
            </form>
            <div style = {{width:`100%`}}>
            {serverState.status && (
                <p style = {{fontFamily:`Courier`}} className={!serverState.status.ok ? "errorMsg" : ""}>
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
