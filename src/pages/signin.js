import React, { useEffect } from "react";

function Signin() {

  useEffect(() => {
    console.log(window.location);

    window.location.href = window.location.origin;
  }, [])
  
  
  return (
    <div>
      <h1>Custom SignIn Page</h1>
    </div>
  );
}

export default Signin;