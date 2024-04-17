import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Iframe({ link }: { link: string }) {
  return (
    <iframe
      title="Sample Report Demo"
      src={link}
      allowFullScreen={true}
      style={{ width: "100%", height: "calc(100vh - 64px)" }} // Adjust height as needed, subtracting any header height
    ></iframe>
  );
}

export default Iframe;
