"use client";

import { SSRProvider } from "react-bootstrap";
import Login from "../pages/Login";
import "../scss/style.default.scss"

export default function Home() {
  return (
    <SSRProvider>
      <div className={"pageProps.className"}>
        <div className="d-flex align-items-stretch">
          <div className={`page-holder align-items-center py-4 bg-gray-100 vh-100`}>
            <Login />
          </div>
        </div>
      </div>
    </SSRProvider>
  );
}
