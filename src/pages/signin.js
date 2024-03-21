// import { providers, signIn, getSession, csrfToken } from "next-auth/client";
import React from "react";

function signin({ providers }) {
  return (
    <div>
      <h1>Custom SignIn Page</h1>
    </div>
  );
}

export default signin;

// export async function getServerSideProps(context) {
//   const { req } = context;
//   const session = await getSession({ req });

//   if (session) {
//     return {
//       redirect: { destination: "/" },
//     };
//   }

//   return {
//     props: {
//       providers: await providers(context),
//       csrfToken: await csrfToken(context),
//     },
//   };
// }