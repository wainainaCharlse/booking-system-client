import "./footer.css";
// import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Contact Us</li>
          {/* <Link to="/hotels">
          <li className="fListItem">Hotels</li>
          </Link> */}
        </ul>
        <ul className="fList">
          {/* <li className="fListItem">Homes </li>
          <li className="fListItem">Apartments </li> */}

        </ul>
        <ul className="fList">
          {/* <li className="fListItem">Curtomer Service</li> */}
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2024 LET'S BOOK.</div>
    </div>
  ); 
};

export default Footer;
