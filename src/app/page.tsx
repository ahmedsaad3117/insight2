"use client";

import { SSRProvider } from "react-bootstrap";
import "../scss/style.default.scss";
import Layout from "@/pages/mathaqat/Layout";

export default function Home() {
  return (
    <SSRProvider>
      <div className={"pageProps.className"}>
        <div className="d-flex align-items-stretch">
          <div
            className={`page-holder align-items-flex-start py-0 bg-gray-100 vh-100`}
          >
            <Layout />
          </div>
        </div>
      </div>
    </SSRProvider>
  );
}
