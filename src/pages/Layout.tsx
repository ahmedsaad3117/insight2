import React, { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { isUserLoggedIn } from "../utils/authManager";
import Head from "next/head";
import NextNprogress from "nextjs-progressbar";
import { GridLoader } from "react-spinners";
import Header from "../components/Header";
import { Container, Row } from "react-bootstrap";
import NavBar from "@/components/NavBar/NavBar";
import Iframe from "@/components/Iframe/IFrame";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import SvgIcons from "./SvgIcons"
// import Sidebar from "./Sidebar"
// import Footer from "./Footer"

const Layout = (pageProps: any) => {
  const session = useSession();

  const [customLink, setCustomLink] = useState(
    "https://app.powerbi.com/view?r=eyJrIjoiMTliMjE1OWMtMzI3ZC00MzY2LTg0NjMtZWI5NmIxZGEzODRjIiwidCI6ImZiMTY2OWYwLTZlYzItNDg0NC1hMzZhLTJlZjRhZTQ2Y2IzNiIsImMiOjl9"
  );

  const [sidebarShrink, setSidebarShrink] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [checkingSession, setCheckingSession] = useState(true);
  const [loadingIframe, setLoadingIframe] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
      return;
    }

    if (!isUserLoggedIn(session?.data!)) signIn("keycloak");
    else setCheckingSession(false);
  }, [session?.data]);

  function handleClick(newUrl: string) {
    setCustomLink(newUrl);
    setLoadingIframe(true);
    setTimeout(() => {
      setLoadingIframe(false);
    }, 2500);
  }

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {checkingSession ? (
        <Row style={{ alignItems: "center", height: "100%" }}>
          <Container style={{ width: 57, boxSizing: "content-box" }}>
            <GridLoader color="#3A3985" size={30} />
            {/* <NextNprogress color="#4E66F8" options={{ showSpinner: true }} /> */}
          </Container>
        </Row>
      ) : (
        <>
          {" "}
          <Header
            setSidebarShrink={setSidebarShrink}
            sidebarShrink={sidebarShrink}
          />
          <Navbar expand="lg" className="me-auto ">
            <Container className="me-auto">
              <Navbar.Collapse id="basic-navbar-nav" className="me-auto ">
                <Nav className="m-auto ">
                  <Nav.Link
                    style={{ fontSize: "18px" }} // Inline style for font size
                    onClick={() =>
                      handleClick(
                        "https://app.powerbi.com/view?r=eyJrIjoiYjE4NjIwZTgtMTRhMy00OGZiLTk1MWItOTI0MDQxYTk2ZjMwIiwidCI6ImZiMTY2OWYwLTZlYzItNDg0NC1hMzZhLTJlZjRhZTQ2Y2IzNiIsImMiOjl9&pageName=ReportSectionf30ed19ae11842d9cdca"
                      )
                    }
                  >
                    C4 Sales
                  </Nav.Link>
                  <Nav.Link
                    style={{ fontSize: "18px" }} // Inline style for font size
                    onClick={() =>
                      handleClick(
                        "https://app.powerbi.com/view?r=eyJrIjoiMTliMjE1OWMtMzI3ZC00MzY2LTg0NjMtZWI5NmIxZGEzODRjIiwidCI6ImZiMTY2OWYwLTZlYzItNDg0NC1hMzZhLTJlZjRhZTQ2Y2IzNiIsImMiOjl9"
                      )
                    }
                  >
                    Prodcuts
                  </Nav.Link>
                  <Nav.Link
                    style={{ fontSize: "18px" }} // Inline style for font size
                    onClick={() =>
                      handleClick(
                        "https://app.powerbi.com/view?r=eyJrIjoiZmI5ODI3YjktN2MzMS00Y2I3LWIwZjAtNTM2OTY3MWY4ODM4IiwidCI6ImZiMTY2OWYwLTZlYzItNDg0NC1hMzZhLTJlZjRhZTQ2Y2IzNiIsImMiOjl9"
                      )
                    }
                  >
                    Cost Analysis
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      )}

      <div
        className={pageProps.className}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <PowerbiEmbedded
        id="4b992ea3-1e50-49de-97b9-1bc463fb3a25" // required
        embedUrl={
          "https://app.powerbi.com/reportEmbed?reportId=703a1a1f-b61a-49cb-8377-c56b748f669c&autoAuth=true&ctid=ca7981a2-785a-463d-b82a"
        } // required
        accessToken="H4sIAAAAAAAEAB3Tt86kVgBA4Xf5WyyRk6UtyAwwZBigI2eGcImW39277k_1SeefHzu9h29a_Pz9gwdT0cjEPCIOdgXAYwKNrkRyGrys7xDkJSwRZm5EoqfxLhTZlNCF-PQLr71Z6qBLvWrZyXa-3-IQWX5a3hE_uT4ppaJjtvW7ZZFo8uYD3HQmZCws1l8p4DNOwmuzcbkdv9tjmkeWpcq3Zq5SCwEPhr2vrp0Vjw7ITsN4aoMv5G-ToZOPPBMWs5LXpKJNMphYh06bWNWzTPgLvzyoFerxVcReiviWxxpn3tRKYHHPIm91lo99FK3bVeyjl5mfRITHgsy7uGAjgBDsTdSGn9N1knxCpqjJDvmU1DapBykP2ksj2pIbFTnQ9FesEXkqltolj_6VH_zRo5fUS01MgXRz2DiMLJeOHV2IZ0KDbWUfjBombXioYYEbpA5eFHrNSzJUT19tNGovr5Zd8S1jLE1POYdy8wPRLjU42LqjprVuY2Uy6DhuHGITgDTUlp0JpiHrY60bMJMS8ZhrjhUEAjUvq4IMTUeNfZXY_jly2NQLzkWfHd71HqTYJAVNBFL5bytLBbpqywHhRc7zag5e5m2eTpfQJxpic6079mbBwmz6shycjJX7RnnUciuzvA8oftUWKisXjlT1-wJMqe_mHiI7B22ZJ2SnFc0a_Yg4G6oAFj8nyUNHeJZA9-ZrEsi9Y58UL6SYMh6T17OHyrXvAcJVv2Z7RMFoDSMRCGfBY-lHO5Wcaoz-d1EoMh4oJcVjN06RLDD5koI0rRP11-Qi04Mq3Ls1tdEjSqtDI1deOt-fx-w1ZZIW5LbucvX6YSH_COvCaG20ut8SS5KHjuGa5xgf9ZajDBYwnAcjTp19DY24I3IvDrK9YNQv06BgCLez5tXTHKX9_PUjrPcMvnp5_97p7LwBbszqrdz4m6SzPatjUAetMajg9Z3xY-B1g044mIMWyrvKjkHCS7nOr5ajvHGyV5qgAlKGdz_vBDdgugsMQDacnNa7m77qOHbhDAr1ANzfMnJa2qlD_XodWpap8gznQE7V74I95JODYsZvZZ5t9K4QZzCL0Qn4k8klWcbNOni5Gy4aQg6lerhhbcs9xL5pvn7VuEkYj7KBPp8Ngjg8QJ1AkXwyMbZi8xvTLTAWMTwqVuP5kdDFHr5Z0jQQQCuZXapWj20rJA_MKcCzHuQ6ocOl1wZOuielgkb9ZhXHiA_NTJqqa4ChnpfRgqTL-62_9JAVNMGrlxfKdxfKjNasOL9-_WG-56ZcX-Fv5fddnra5Z2fRfKowNj9587a5_yuvracU7Gv5O5uUu5NOOu0ulu1WcnEfh31Dj8GDyCvydjnrfsUoeC3aeZRdeN-YF6eF5WRUMazTQlXDn6kJFggUdu-VH4lbcAN2rsF_czndFxVnCuHcnhomGHQFqe4nH-I05JXcozkJ1dAPb2KP0TA4arpkBbANtRdVE4RwqrP0RIj9ttMCzn0nvpPPmAGs53t3Ihhtoosr68xB5NJ4Hpl-yipMyNwQHPM9JlnDoPIhKgsmfC5cV-c-shIySdO3qTxktDbiGBCHrjrQ-eAKc11Uh7rmaqhBdipcYSU3iq3nTD1SNOLKviR1yXliZGvPlH-VFYY_y_eGeTNil8gKYH-RXSs402zhsQz0f5j__Q8EIGYlQgYAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUYtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImV4cCI6MTcxMTYxMzkzNywiYWxsb3dBY2Nlc3NPdmVyUHVibGljSW50ZXJuZXQiOnRydWV9" // required
        filterPaneEnabled={false}
        navContentPaneEnabled={false}
        settings={
          {
            // any settings including localeSettings
          }
        }
      /> */}

        {/* <iframe
          title="Sample Report Demo"
          src="https://playground.powerbi.com/sampleReportEmbed"
          allowFullScreen={true}
          style={{ width: "100%", height: "calc(100vh - 64px)" }} // Adjust height as needed, subtracting any header height
        ></iframe> */}

        {!loadingIframe && <Iframe link={customLink} />}

        {/* <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: "4b992ea3-1e50-49de-97b9-1bc463fb3a25",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=fdc8576e93b-4865-ab57-4a918fadf991c&autoAuth=true&ctid=ca7981a2-785a-463d-b82a",
          // accessToken:
          //   "H4sIAAAAAAAEAB3Tt86kVgBA4Xf5WyyRk6UtyAwwZBigI2eGcImW39277k_1SeefHzu9h29a_Pz9gwdT0cjEPCIOdgXAYwKNrkRyGrys7xDkJSwRZm5EoqfxLhTZlNCF-PQLr71Z6qBLvWrZyXa-3-IQWX5a3hE_uT4ppaJjtvW7ZZFo8uYD3HQmZCws1l8p4DNOwmuzcbkdv9tjmkeWpcq3Zq5SCwEPhr2vrp0Vjw7ITsN4aoMv5G-ToZOPPBMWs5LXpKJNMphYh06bWNWzTPgLvzyoFerxVcReiviWxxpn3tRKYHHPIm91lo99FK3bVeyjl5mfRITHgsy7uGAjgBDsTdSGn9N1knxCpqjJDvmU1DapBykP2ksj2pIbFTnQ9FesEXkqltolj_6VH_zRo5fUS01MgXRz2DiMLJeOHV2IZ0KDbWUfjBombXioYYEbpA5eFHrNSzJUT19tNGovr5Zd8S1jLE1POYdy8wPRLjU42LqjprVuY2Uy6DhuHGITgDTUlp0JpiHrY60bMJMS8ZhrjhUEAjUvq4IMTUeNfZXY_jly2NQLzkWfHd71HqTYJAVNBFL5bytLBbpqywHhRc7zag5e5m2eTpfQJxpic6079mbBwmz6shycjJX7RnnUciuzvA8oftUWKisXjlT1-wJMqe_mHiI7B22ZJ2SnFc0a_Yg4G6oAFj8nyUNHeJZA9-ZrEsi9Y58UL6SYMh6T17OHyrXvAcJVv2Z7RMFoDSMRCGfBY-lHO5Wcaoz-d1EoMh4oJcVjN06RLDD5koI0rRP11-Qi04Mq3Ls1tdEjSqtDI1deOt-fx-w1ZZIW5LbucvX6YSH_COvCaG20ut8SS5KHjuGa5xgf9ZajDBYwnAcjTp19DY24I3IvDrK9YNQv06BgCLez5tXTHKX9_PUjrPcMvnp5_97p7LwBbszqrdz4m6SzPatjUAetMajg9Z3xY-B1g044mIMWyrvKjkHCS7nOr5ajvHGyV5qgAlKGdz_vBDdgugsMQDacnNa7m77qOHbhDAr1ANzfMnJa2qlD_XodWpap8gznQE7V74I95JODYsZvZZ5t9K4QZzCL0Qn4k8klWcbNOni5Gy4aQg6lerhhbcs9xL5pvn7VuEkYj7KBPp8Ngjg8QJ1AkXwyMbZi8xvTLTAWMTwqVuP5kdDFHr5Z0jQQQCuZXapWj20rJA_MKcCzHuQ6ocOl1wZOuielgkb9ZhXHiA_NTJqqa4ChnpfRgqTL-62_9JAVNMGrlxfKdxfKjNasOL9-_WG-56ZcX-Fv5fddnra5Z2fRfKowNj9587a5_yuvracU7Gv5O5uUu5NOOu0ulu1WcnEfh31Dj8GDyCvydjnrfsUoeC3aeZRdeN-YF6eF5WRUMazTQlXDn6kJFggUdu-VH4lbcAN2rsF_czndFxVnCuHcnhomGHQFqe4nH-I05JXcozkJ1dAPb2KP0TA4arpkBbANtRdVE4RwqrP0RIj9ttMCzn0nvpPPmAGs53t3Ihhtoosr68xB5NJ4Hpl-yipMyNwQHPM9JlnDoPIhKgsmfC5cV-c-shIySdO3qTxktDbiGBCHrjrQ-eAKc11Uh7rmaqhBdipcYSU3iq3nTD1SNOLKviR1yXliZGvPlH-VFYY_y_eGeTNil8gKYH-RXSs402zhsQz0f5j__Q8EIGYlQgYAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUYtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImV4cCI6MTcxMTYxMzkzNywiYWxsb3dBY2Nlc3NPdmVyUHVibGljSW50ZXJuZXQiOnRydWV9",
          // tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
            // @ts-ignore
            background: models.BackgroundType.Transparent,  
          },
        }}
        eventHandlers={ 
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event);
              },
            ],
            ["visualClicked", () => console.log("visual clicked")],
            ["pageChanged", (event) => console.log(event)],
          ])
        }
        cssClassName={"Embed-container"}
        getEmbeddedComponent={(embeddedReport) => {
          Window.report = embeddedReport;
        }}
      /> */}
      </div>
    </div>
  );
};

export default Layout;
