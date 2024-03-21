import React, { useEffect } from "react";

function Signin() {

  useEffect(() => {
    console.log(window.location);

    window.location.href = process.env.NEXTAUTH_URL;
  }, [])
  
  
  return (
    <div>
      <h1>Custom SignIn Page</h1>
    </div>
  );
}

export default Signin;