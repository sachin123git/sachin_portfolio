
import "./Navbar.css";
import s1 from "../../images/s1.jpeg"

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import the renamed Link component

export default function Navbar() {
   
  let [navdata, setnavdata] = useState([
    {
      _id: 1001,
      title: "Home",
      linkName: "home", // Renamed 'Link' to 'linkName'
    },
     {
    _id: 1002,
    title: "Features",
    linkname: "../Feature/feature.jsx",
  },
  {
    _id: 1003,
    title: "Projects",
    linkname: "projects",
  },
  {
    _id: 1004,
    title: "Resume",
    linkname: "resume",
  },
  {
    _id: 1005,
    title: "Testimonial",
    linkname: "testimonial",
  },
  {
    _id: 1006,
    title: "Contact",
    linkname: "contact",
  }
    // ... other navdata items ...
  ]);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={s1} alt="" />
      </div>
      <div>
        <ul>
          {navdata.map(({ _id, title, linkName }) => (
            <li key={_id}>
              <ScrollLink
                to={linkName}
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                offset={-70} >
                {" "}
                {/* Use the renamed Link component */}
                {title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
